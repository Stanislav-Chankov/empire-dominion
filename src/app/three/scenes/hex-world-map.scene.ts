import * as THREE from 'three';
import { disposeObject3D } from '../core/three-dispose';
import { ThreeContext, ThreeSceneController, ThreeSize } from '../core/three-scene-controller';
import { zoneTypeColor } from './zone-type-palette';

/**
 * A simple "world map" prototype: big bright-green hex grid on black background with drag-pan.
 * Camera is tilted to mimic a Google-Earth style 2.5D perspective while staying on a flat plane.
 */
export class HexWorldMapScene implements ThreeSceneController {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private canvas!: HTMLCanvasElement;

  private readonly raycaster = new THREE.Raycaster();
  private readonly ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private readonly target = new THREE.Vector3(0, 0, 0);

  private dragging = false;
  private dragLastPoint = new THREE.Vector3();
  private dragPointerId: number | null = null;
  private dragStartClientX = 0;
  private dragStartClientY = 0;
  private dragIsPanning = false;

  private readonly zoomMinDistance = 20;
  private readonly zoomMaxDistance = 220;

  private hexLines?: THREE.LineSegments;
  private labelsGroup?: THREE.Group;
  private iconMaterials = new Map<number, THREE.SpriteMaterial>(); // zoneTypeId -> material
  private zoneIdToTypeId = new Map<number, number>();
  private staticTilesByKey = new Map<string, StaticMapTile>();
  private staticZonesById = new Map<number, StaticMap['zones'][number]>();
  private staticShapeRadius = 0;
  private rings?: StaticMap['rings'];
  private hexRadius = 3.0;

  private selectedHex?: THREE.LineLoop;

  private tileClickEnabled = true;
  private onTileClick?: (tile: StaticMapTile) => void;

  private onPointerDown?: (e: PointerEvent) => void;
  private onPointerMove?: (e: PointerEvent) => void;
  private onPointerUp?: (e: PointerEvent) => void;
  private onWheel?: (e: WheelEvent) => void;

  createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    this.scene = scene;
    return scene;
  }

  createCamera(_size: ThreeSize): THREE.Camera {
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 5000);
    // Tilted, "google earth-ish" view onto XZ plane
    // Slightly more top-down so tile icons stay visually "inside" the hexes.
    camera.position.set(0, 55, 55);
    camera.lookAt(this.target);
    this.camera = camera;
    return camera;
  }

  init(ctx: ThreeContext): void {
    this.canvas = ctx.canvas;

    // Load static map and render tiles with zoneId labels.
    // (Fallback: if fetch fails, we'll render a small local grid.)
    void this.loadAndBuildStaticMap().catch(() => {
      this.buildFallbackGrid();
    });

    // Input: drag-pan on the ground plane
    this.onPointerDown = (e) => this.handlePointerDown(e);
    this.onPointerMove = (e) => this.handlePointerMove(e);
    this.onPointerUp = (e) => this.handlePointerUp(e);
    this.onWheel = (e) => this.handleWheel(e);

    this.canvas.addEventListener('pointerdown', this.onPointerDown, { passive: false });
    this.canvas.addEventListener('pointermove', this.onPointerMove, { passive: false });
    this.canvas.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('pointerup', this.onPointerUp, { passive: true });
    window.addEventListener('pointercancel', this.onPointerUp, { passive: true });
  }

  update(_dt: number, _elapsed: number): void {
    // no per-frame animation for now
  }

  dispose(): void {
    if (this.onPointerDown) this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    if (this.onPointerMove) this.canvas.removeEventListener('pointermove', this.onPointerMove);
    if (this.onWheel) this.canvas.removeEventListener('wheel', this.onWheel);
    if (this.onPointerUp) {
      window.removeEventListener('pointerup', this.onPointerUp);
      window.removeEventListener('pointercancel', this.onPointerUp);
    }

    if (this.hexLines) disposeObject3D(this.hexLines);
    this.hexLines = undefined;
    if (this.labelsGroup) disposeObject3D(this.labelsGroup);
    this.labelsGroup = undefined;
    this.iconMaterials.forEach((m) => {
      m.map?.dispose();
      m.dispose();
    });
    this.iconMaterials.clear();
  }

  private handlePointerDown(e: PointerEvent): void {
    // left button only
    if (e.button !== 0) return;
    const hit = this.pointerToGround(e);
    if (!hit) return;

    this.dragging = true;
    this.dragPointerId = e.pointerId;
    this.dragLastPoint.copy(hit);
    this.dragStartClientX = e.clientX;
    this.dragStartClientY = e.clientY;
    this.dragIsPanning = false;

    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
      // ignore; not supported in some contexts
    }

    e.preventDefault();
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.dragging) return;
    if (this.dragPointerId != null && e.pointerId !== this.dragPointerId) return;

    const dx = e.clientX - this.dragStartClientX;
    const dy = e.clientY - this.dragStartClientY;
    const movedSq = dx * dx + dy * dy;

    // Don't start panning until the pointer moved a bit; enables "click" selection on tiles.
    if (!this.dragIsPanning) {
      if (movedSq < 16) return; // ~4px
      this.dragIsPanning = true;
    }

    const hit = this.pointerToGround(e);
    if (!hit) return;

    // Move camera+target opposite to cursor motion for "grab map" feel.
    const delta = hit.clone().sub(this.dragLastPoint);
    this.dragLastPoint.copy(hit);

    this.target.sub(delta);
    this.camera.position.sub(delta);
    this.camera.lookAt(this.target);

    e.preventDefault();
  }

  private handlePointerUp(e: PointerEvent): void {
    // We register pointerup on `window`, so this will fire even when the user clicks UI overlays.
    // Only treat pointerup as a map interaction if the pointer started on our canvas.
    if (!this.dragging) return;
    if (this.dragPointerId == null) return;
    if (e.pointerId !== this.dragPointerId) return;

    // If we didn't pan, treat as a click and select a tile.
    if (!this.dragIsPanning) {
      const hit = this.pointerToGround(e);
      if (hit) this.tryClickTileAtWorld(hit);
    }

    this.dragging = false;
    this.dragPointerId = null;
    this.dragIsPanning = false;
  }

  private handleWheel(e: WheelEvent): void {
    // Scroll down => zoom out; scroll up => zoom in
    const delta = Math.sign(e.deltaY);
    if (delta === 0) return;

    // Dolly along the view vector (camera -> target), keeping the same tilt.
    const viewDir = this.camera.position.clone().sub(this.target); // from target to camera
    const dist = viewDir.length();
    if (dist <= 0.0001) return;

    // Use an exponential step for smooth zooming.
    const zoomFactor = Math.pow(1.08, delta); // delta>0 zoom out, delta<0 zoom in
    const nextDist = THREE.MathUtils.clamp(dist * zoomFactor, this.zoomMinDistance, this.zoomMaxDistance);

    viewDir.normalize().multiplyScalar(nextDist);
    this.camera.position.copy(this.target).add(viewDir);
    this.camera.lookAt(this.target);

    e.preventDefault();
  }

  private pointerToGround(e: PointerEvent): THREE.Vector3 | null {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    const ndc = new THREE.Vector2(x, y);
    this.raycaster.setFromCamera(ndc, this.camera);

    const out = new THREE.Vector3();
    const ok = this.raycaster.ray.intersectPlane(this.ground, out);
    return ok ? out : null;
  }

  /**
   * Consumers (Angular) can subscribe to tile clicks without directly touching Three.js.
   * Only one tile is "clickable" at a time if the consumer disables clicks (e.g. while a modal is open).
   */
  setTileClickHandler(handler?: (tile: StaticMapTile) => void): void {
    this.onTileClick = handler;
  }

  setTileClickEnabled(enabled: boolean): void {
    this.tileClickEnabled = enabled;
  }

  setSelectedTile(q: number, r: number): void {
    const center = axialToXZCenter(this.hexRadius, q, r);
    const geo = buildHexOutlineGeometry(this.hexRadius * 0.98);
    const mat = new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.85 });
    const loop = new THREE.LineLoop(geo, mat);
    loop.position.set(center.x, 0.08, center.z);

    if (this.selectedHex) {
      disposeObject3D(this.selectedHex);
      this.scene.remove(this.selectedHex);
    }
    this.scene.add(loop);
    this.selectedHex = loop;
  }

  clearSelectedTile(): void {
    if (!this.selectedHex) return;
    disposeObject3D(this.selectedHex);
    this.scene.remove(this.selectedHex);
    this.selectedHex = undefined;
  }

  getZoneById(zoneId: number): StaticMap['zones'][number] | undefined {
    return this.staticZonesById.get(zoneId);
  }

  /** starting = outer ring, contested = middle ring, pvp = inner ring */
  getControlTypeForAxial(q: number, r: number): 'starting' | 'contested' | 'pvp' {
    if (!this.rings || !this.staticShapeRadius) return 'contested';
    const dist = cubeDistance(axialToCube(q, r), { x: 0, y: 0, z: 0 });
    return dist >= this.rings.outerStartDistance
      ? 'starting'
      : dist >= this.rings.contestedStartDistance
        ? 'contested'
        : 'pvp';
  }

  private tryClickTileAtWorld(world: THREE.Vector3): void {
    if (!this.tileClickEnabled) return;
    const axial = worldXZToAxialRounded(this.hexRadius, world.x, world.z);
    if (!axial) return;
    const key = tileKey(axial.q, axial.r);
    const tile = this.staticTilesByKey.get(key);
    if (!tile) return;

    this.onTileClick?.(tile);
  }

  private async loadAndBuildStaticMap(): Promise<void> {
    const res = await fetch('/game-data/static-map.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`static-map fetch failed: ${res.status}`);
    const data = (await res.json()) as StaticMap;
    await this.buildFromStaticMap(data);
  }

  private buildFallbackGrid(): void {
    const hexRadius = 3.0;
    const radius = 6; // hex-shaped local radius
    this.hexRadius = hexRadius;
    this.staticShapeRadius = radius;
    this.rings = { outerStartDistance: Math.floor(radius * 0.66), contestedStartDistance: Math.floor(radius * 0.33) };
    const tiles: StaticMapTile[] = [];
    for (let q = -radius; q <= radius; q++) {
      for (let r = -radius; r <= radius; r++) {
        if (!inHexRadius(q, r, radius)) continue;
        tiles.push({ q, r, zoneId: 0 });
      }
    }
    this.staticTilesByKey = new Map(tiles.map((t) => [tileKey(t.q, t.r), t]));
    this.buildTiles(hexRadius, tiles);
  }

  private async buildFromStaticMap(map: StaticMap): Promise<void> {
    const hexRadius = 3.0;
    this.hexRadius = hexRadius;
    this.staticShapeRadius = map.shape.radius;
    this.rings = map.rings;
    this.zoneIdToTypeId = new Map(map.zones.map((z) => [z.zoneId, z.zoneTypeId]));
    this.staticZonesById = new Map(map.zones.map((z) => [z.zoneId, z]));
    this.staticTilesByKey = new Map(map.tiles.map((t) => [tileKey(t.q, t.r), t]));
    await this.buildTiles(hexRadius, map.tiles, map.zones);
  }

  private async buildTiles(hexRadius: number, tiles: StaticMapTile[], zones?: StaticMap['zones']): Promise<void> {
    // Remove previous visuals (if any)
    if (this.hexLines) {
      disposeObject3D(this.hexLines);
      this.scene.remove(this.hexLines);
      this.hexLines = undefined;
    }
    if (this.labelsGroup) {
      disposeObject3D(this.labelsGroup);
      this.scene.remove(this.labelsGroup);
      this.labelsGroup = undefined;
    }
    this.iconMaterials.forEach((m) => {
      m.map?.dispose();
      m.dispose();
    });
    this.iconMaterials.clear();

    // Lines
    const geometry = buildMergedHexEdgeGeometryFromTiles(hexRadius, tiles);
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 1 });
    const lines = new THREE.LineSegments(geometry, material);
    lines.frustumCulled = true;
    this.scene.add(lines);
    this.hexLines = lines;

    // Icons (zoneId -> zoneTypeId comes from static map zones list)
    if (zones) this.zoneIdToTypeId = new Map(zones.map((z) => [z.zoneId, z.zoneTypeId]));

    // Preload all required icon materials once
    const typeIds = new Set<number>();
    for (const t of tiles) {
      const typeId = this.zoneIdToTypeId.get(t.zoneId) ?? 1;
      typeIds.add(typeId);
    }
    await Promise.all(
      [...typeIds].map(async (typeId) => {
        await this.ensureIconMaterial(typeId);
      })
    );

    const labels = new THREE.Group();
    labels.name = 'zone-icons';

    for (const t of tiles) {
      const center = axialToXZCenter(hexRadius, t.q, t.r);
      const typeId = this.zoneIdToTypeId.get(t.zoneId) ?? 1;
      const sprite = new THREE.Sprite(this.iconMaterials.get(typeId)!);
      sprite.position.set(center.x, 0.05, center.z);
      // fit inside hex tile
      sprite.scale.set(hexRadius * 1.55, hexRadius * 1.55, 1);
      labels.add(sprite);
    }

    this.scene.add(labels);
    this.labelsGroup = labels;
  }

  private async ensureIconMaterial(zoneTypeId: number): Promise<void> {
    if (this.iconMaterials.has(zoneTypeId)) return;
    let tex: THREE.Texture;
    const color = zoneTypeColor(zoneTypeId);
    try {
      tex = await loadSvgIconAsHexMaskedTexture(`/zone-icons/${zoneTypeId}.svg`, color);
    } catch {
      // Fallback so missing/broken icons don't result in invisible tiles
      tex = makeFallbackTextTexture(String(zoneTypeId), color);
    }
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: true,
      depthWrite: false
    });
    this.iconMaterials.set(zoneTypeId, mat);
  }

  /**
   * Minimap API: current camera "center" (target) and viewport rectangle on the ground plane (y=0).
   */
  getMinimapState(): {
    targetX: number;
    targetZ: number;
    cameraY: number;
    viewRect?: { minX: number; maxX: number; minZ: number; maxZ: number };
  } {
    const base = { targetX: this.target.x, targetZ: this.target.z, cameraY: this.camera?.position.y ?? 0 };

    // Build an axis-aligned rectangle on the XZ plane that covers what's visible in the main viewport.
    // We do this by intersecting the 4 screen-corner rays with the ground plane (y=0) and taking the AABB.
    try {
      const corners = [
        new THREE.Vector2(-1, -1),
        new THREE.Vector2(1, -1),
        new THREE.Vector2(1, 1),
        new THREE.Vector2(-1, 1)
      ];

      const pts: THREE.Vector3[] = [];
      for (const ndc of corners) {
        this.raycaster.setFromCamera(ndc, this.camera);
        const out = new THREE.Vector3();
        const ok = this.raycaster.ray.intersectPlane(this.ground, out);
        if (ok) pts.push(out);
      }

      if (pts.length >= 2) {
        let minX = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        let minZ = Number.POSITIVE_INFINITY;
        let maxZ = Number.NEGATIVE_INFINITY;
        for (const p of pts) {
          minX = Math.min(minX, p.x);
          maxX = Math.max(maxX, p.x);
          minZ = Math.min(minZ, p.z);
          maxZ = Math.max(maxZ, p.z);
        }

        return {
          ...base,
          viewRect: { minX, maxX, minZ, maxZ }
        };
      }
    } catch {
      // If anything goes wrong (camera not ready, etc), just omit viewRect.
    }

    return base;
  }

  /**
   * Minimap API: recenter map to world-space XZ point.
   */
  setTargetXZ(targetX: number, targetZ: number): void {
    if (!this.camera) return;
    const offset = this.camera.position.clone().sub(this.target);
    this.target.set(targetX, 0, targetZ);
    this.camera.position.copy(this.target).add(offset);
    this.camera.lookAt(this.target);
  }
}

type StaticMapTile = { q: number; r: number; zoneId: number };
type StaticMap = {
  version: number;
  coordSystem: 'axial';
  shape: { kind: 'hex'; radius: number };
  rings: { outerStartDistance: number; contestedStartDistance: number };
  zones: Array<{ zoneId: number; name: string; zoneTypeId: number; levelRange: { min: number; max: number } }>;
  tiles: StaticMapTile[];
};

type Cube = { x: number; y: number; z: number };

function inHexRadius(q: number, r: number, radius: number): boolean {
  const x = q;
  const z = r;
  const y = -x - z;
  return Math.max(Math.abs(x), Math.abs(y), Math.abs(z)) <= radius;
}

function axialToXZCenter(radius: number, q: number, r: number): { x: number; z: number } {
  // Pointy-top hex on XZ plane:
  // axial coords (q, r) -> x,z
  // x = sqrt(3) * radius * (q + r/2)
  // z = 3/2 * radius * r
  const sqrt3 = Math.sqrt(3);
  const x = sqrt3 * radius * (q + r / 2);
  const z = 1.5 * radius * r;
  return { x, z };
}

function tileKey(q: number, r: number): string {
  return `${q},${r}`;
}

function axialToCube(q: number, r: number): Cube {
  const x = q;
  const z = r;
  const y = -x - z;
  return { x, y, z };
}

function cubeDistance(a: Cube, b: Cube): number {
  return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.z - b.z));
}

function cubeRound(c: { x: number; y: number; z: number }): Cube {
  let rx = Math.round(c.x);
  let ry = Math.round(c.y);
  let rz = Math.round(c.z);

  const xDiff = Math.abs(rx - c.x);
  const yDiff = Math.abs(ry - c.y);
  const zDiff = Math.abs(rz - c.z);

  if (xDiff > yDiff && xDiff > zDiff) rx = -ry - rz;
  else if (yDiff > zDiff) ry = -rx - rz;
  else rz = -rx - ry;

  return { x: rx, y: ry, z: rz };
}

function worldXZToAxialRounded(hexRadius: number, x: number, z: number): { q: number; r: number } | null {
  const sqrt3 = Math.sqrt(3);
  const rf = (2 / 3) * (z / hexRadius);
  const qf = x / (sqrt3 * hexRadius) - rf / 2;

  const cube = cubeRound({ x: qf, y: -qf - rf, z: rf });
  return { q: cube.x, r: cube.z };
}

function buildHexOutlineGeometry(radius: number): THREE.BufferGeometry {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30); // pointy-top
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  // close the loop
  points.push(points[0]!.clone());

  const positions = new Float32Array(points.length * 3);
  let o = 0;
  for (const p of points) {
    positions[o++] = p.x;
    positions[o++] = p.y;
    positions[o++] = p.z;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.computeBoundingSphere();
  return geo;
}

function buildMergedHexEdgeGeometryFromTiles(radius: number, tiles: StaticMapTile[]): THREE.BufferGeometry {
  const tileCount = tiles.length;
  // 6 edges => 6 segments => 12 vertices per tile
  const vertsPerTile = 12;
  const floatsPerVert = 3;
  const positions = new Float32Array(tileCount * vertsPerTile * floatsPerVert);

  // Precompute local hex segments (6 edges) centered at origin on XZ plane
  const local = new Float32Array(vertsPerTile * floatsPerVert);
  const corners: THREE.Vector3[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30); // pointy-top
    corners.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  let li = 0;
  for (let i = 0; i < 6; i++) {
    const a = corners[i];
    const b = corners[(i + 1) % 6];
    local[li++] = a.x;
    local[li++] = a.y;
    local[li++] = a.z;
    local[li++] = b.x;
    local[li++] = b.y;
    local[li++] = b.z;
  }

  let offset = 0;
  for (const t of tiles) {
    const center = axialToXZCenter(radius, t.q, t.r);
    for (let i = 0; i < local.length; i += 3) {
      positions[offset++] = local[i] + center.x;
      positions[offset++] = local[i + 1];
      positions[offset++] = local[i + 2] + center.z;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.computeBoundingSphere();
  return geo;
}

async function loadSvgIconAsHexMaskedTexture(url: string, color: string): Promise<THREE.Texture> {
  const res = await fetch(url, { cache: 'force-cache' });
  if (!res.ok) throw new Error(`icon fetch failed: ${res.status}`);
  const svg = await res.text();
  const coloredSvg = forceSvgFill(svg, color);

  const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
  const blobUrl = URL.createObjectURL(blob);
  try {
    const img = await loadImage(blobUrl);
    return makeHexMaskedTexture(img);
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

function forceSvgFill(svg: string, color: string): string {
  // Many icon SVGs rely on default fill (black) or currentColor; on our black map that becomes invisible.
  // This best-effort rewrite forces a solid fill color.
  let out = svg;

  // Replace explicit currentColor fills
  out = out.replace(/fill\s*=\s*["']currentColor["']/gi, `fill="${color}"`);

  // Inject/override a top-level fill attribute on <svg ...>
  out = out.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
    // Remove existing fill attrs so we can force ours
    const cleaned = String(attrs).replace(/\sfill\s*=\s*["'][^"']*["']/gi, '');
    return `<svg${cleaned} fill="${color}">`;
  });

  return out;
}

function makeHexMaskedTexture(img: HTMLImageElement): THREE.Texture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    const tex = new THREE.Texture();
    tex.needsUpdate = true;
    return tex;
  }

  ctx.clearRect(0, 0, size, size);

  // Hex clip mask (pointy-top), with padding so it fits inside the tile visually.
  const pad = 6;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - pad;
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.clip();

  // Draw icon centered, scale to fit
  const iconPad = 18;
  ctx.drawImage(img, iconPad, iconPad, size - iconPad * 2, size - iconPad * 2);
  ctx.restore();

  // Optional subtle hex outline to blend with grid
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(0,255,0,0.18)';
  ctx.stroke();
  ctx.restore();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

function makeFallbackTextTexture(text: string, color: string): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    const tex = new THREE.Texture();
    tex.needsUpdate = true;
    return tex;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 56px system-ui, -apple-system, Segoe UI, Roboto, Arial';

  ctx.lineWidth = 10;
  ctx.strokeStyle = 'rgba(0,0,0,0.7)';
  ctx.strokeText(text, canvas.width / 2, canvas.height / 2);

  ctx.fillStyle = color;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}


