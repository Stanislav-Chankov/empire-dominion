import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { HexWorldMapScene } from '../../../three/scenes/hex-world-map.scene';
import { zoneTypeColor } from '../../../three/scenes/zone-type-palette';

type StaticMap = {
  version: number;
  coordSystem: 'axial';
  shape: { kind: 'hex'; radius: number };
  zones: Array<{ zoneId: number; zoneTypeId: number }>;
  tiles: Array<{ q: number; r: number; zoneId: number }>;
};

@Component({
  selector: 'app-minimap',
  standalone: false,
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinimapComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) scene!: HexWorldMapScene;

  @ViewChild('canvas', { static: true }) private readonly canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('host', { static: true }) private readonly hostRef!: ElementRef<HTMLDivElement>;

  private destroyed = false;
  private rafId?: number;
  private resizeObserver?: ResizeObserver;

  private map?: StaticMap;
  private zoneIdToTypeId = new Map<number, number>();

  // world bounds in XZ (computed from tiles)
  private bounds?: { minX: number; maxX: number; minZ: number; maxZ: number };

  // prerendered base map for fast redraw
  private baseCanvas?: HTMLCanvasElement;

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    void this.loadMap();
    this.setupResize();
    this.zone.runOutsideAngular(() => this.loop());
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.resizeObserver?.disconnect();
  }

  onClick(e: MouseEvent): void {
    if (!this.bounds) return;
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const u = (e.clientX - rect.left) / rect.width; // 0..1
    const v = (e.clientY - rect.top) / rect.height; // 0..1

    const x = this.bounds.minX + u * (this.bounds.maxX - this.bounds.minX);
    const z = this.bounds.minZ + v * (this.bounds.maxZ - this.bounds.minZ);
    this.scene.setTargetXZ(x, z);
  }

  private setupResize(): void {
    const host = this.hostRef.nativeElement;
    this.resizeObserver = new ResizeObserver(() => this.redraw());
    this.resizeObserver.observe(host);
  }

  private loop(): void {
    const tick = () => {
      if (this.destroyed) return;
      this.redraw();
      this.rafId = requestAnimationFrame(tick);
    };
    tick();
  }

  private async loadMap(): Promise<void> {
    const res = await fetch('/game-data/static-map.json', { cache: 'no-store' });
    if (!res.ok) return;
    const map = (await res.json()) as StaticMap;
    this.map = map;
    this.zoneIdToTypeId = new Map(map.zones.map((z) => [z.zoneId, z.zoneTypeId]));
    this.computeBounds();
    this.buildBaseCanvas();
    this.redraw();
  }

  private computeBounds(): void {
    if (!this.map) return;
    // Must match axialToXZCenter() used in Three scene (hexRadius=3.0)
    const hexRadius = 3.0;
    const sqrt3 = Math.sqrt(3);

    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minZ = Number.POSITIVE_INFINITY;
    let maxZ = Number.NEGATIVE_INFINITY;

    for (const t of this.map.tiles) {
      const x = sqrt3 * hexRadius * (t.q + t.r / 2);
      const z = 1.5 * hexRadius * t.r;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minZ = Math.min(minZ, z);
      maxZ = Math.max(maxZ, z);
    }

    // add a small padding so edge tiles aren't clipped
    const pad = hexRadius * 2;
    this.bounds = { minX: minX - pad, maxX: maxX + pad, minZ: minZ - pad, maxZ: maxZ + pad };
  }

  private buildBaseCanvas(): void {
    if (!this.map || !this.bounds) return;

    const base = document.createElement('canvas');
    base.width = 256;
    base.height = 256;
    const ctx = base.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, base.width, base.height);

    for (const t of this.map.tiles) {
      const typeId = this.zoneIdToTypeId.get(t.zoneId) ?? 1;
      const color = zoneTypeColor(typeId);

      const world = this.tileToWorld(t.q, t.r);
      const px = this.worldToPxX(world.x, base.width);
      const py = this.worldToPxY(world.z, base.height);

      // draw small filled circle marker per tile
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // faint border
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, base.width - 2, base.height - 2);

    this.baseCanvas = base;
  }

  private redraw(): void {
    const canvas = this.canvasRef.nativeElement;
    const host = this.hostRef.nativeElement;
    const rect = host.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));

    if (canvas.width !== w) canvas.width = w;
    if (canvas.height !== h) canvas.height = h;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);

    if (this.baseCanvas) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(this.baseCanvas, 0, 0, w, h);
    } else {
      // fallback background
      ctx.fillStyle = '#050a06';
      ctx.fillRect(0, 0, w, h);
    }

    // Overlay: current target + viewport rectangle
    const { targetX, targetZ, viewRect } = this.scene.getMinimapState();
    if (this.bounds) {
      const x = this.worldToPxX(targetX, w);
      const y = this.worldToPxY(targetZ, h);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.fill();

      if (viewRect) {
        const x1 = this.worldToPxX(viewRect.minX, w);
        const x2 = this.worldToPxX(viewRect.maxX, w);
        const y1 = this.worldToPxY(viewRect.minZ, h);
        const y2 = this.worldToPxY(viewRect.maxZ, h);

        const rx = Math.min(x1, x2);
        const ry = Math.min(y1, y2);
        const rw = Math.abs(x2 - x1);
        const rh = Math.abs(y2 - y1);

        ctx.strokeStyle = 'rgba(255,255,255,0.65)';
        ctx.lineWidth = 2;
        ctx.strokeRect(rx, ry, rw, rh);
      }
    }
  }

  private tileToWorld(q: number, r: number): { x: number; z: number } {
    const hexRadius = 3.0;
    const sqrt3 = Math.sqrt(3);
    const x = sqrt3 * hexRadius * (q + r / 2);
    const z = 1.5 * hexRadius * r;
    return { x, z };
  }

  private worldToPxX(x: number, width: number): number {
    const b = this.bounds!;
    return ((x - b.minX) / (b.maxX - b.minX)) * width;
  }

  private worldToPxY(z: number, height: number): number {
    const b = this.bounds!;
    return ((z - b.minZ) / (b.maxZ - b.minZ)) * height;
  }
}


