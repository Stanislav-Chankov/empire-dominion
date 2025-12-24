import fs from 'node:fs';
import path from 'node:path';

/**
 * Generates a static hex map JSON file for early prototyping.
 * - axial coords (q,r) within hex radius
 * - layered assignment: outer starter (~1/3), middle contested (~1/5), inner rare (rest)
 * - seedable randomization with adjacency-avoidance
 */

type Axial = { q: number; r: number };
type Cube = { x: number; y: number; z: number };

type StaticMapZone = {
  zoneId: number;
  name: string;
  zoneTypeId: number;
  levelRange: { min: number; max: number };
};

type StaticMapTile = { q: number; r: number; zoneId: number };

const projectRoot = process.cwd();
const outFile = path.join(projectRoot, 'public', 'game-data', 'static-map.json');

// "Layers" = hex radius rings. 32 layers => radius 32 (~3169 tiles).
const RADIUS = Number(process.env.MAP_RADIUS ?? 32);
// Keep a stable default so the checked-in map is deterministic.
const SEED = process.env.MAP_SEED ?? 'layered-random-v2';

function axialToCube(q: number, r: number): Cube {
  const x = q;
  const z = r;
  const y = -x - z;
  return { x, y, z };
}

function cubeDistance(a: Cube, b: Cube): number {
  return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.z - b.z));
}

function inHexRadius(q: number, r: number, radius: number): boolean {
  const c = axialToCube(q, r);
  const o: Cube = { x: 0, y: 0, z: 0 };
  return cubeDistance(c, o) <= radius;
}

function sectorOf(q: number, r: number): number {
  // crude sector by angle in xz plane (good enough for prototyping)
  const angle = Math.atan2(r, q); // -pi..pi
  const sector = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * 6) % 6;
  return sector;
}

function hashStringToUint32(str: string): number {
  // FNV-1a 32-bit
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seedStr: string): () => number {
  // Simple LCG, deterministic per seed
  let state = hashStringToUint32(seedStr) || 1;
  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

function shuffleInPlace<T>(arr: T[], rng: () => number): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function axialNeighbors(q: number, r: number): Axial[] {
  return [
    { q: q + 1, r },
    { q: q + 1, r: r - 1 },
    { q, r: r - 1 },
    { q: q - 1, r },
    { q: q - 1, r: r + 1 },
    { q, r: r + 1 }
  ];
}

function computeLayerThresholds(
  tilesByDist: Map<number, number>,
  totalTiles: number,
  radius: number
): { outerStartDistance: number; contestedStartDistance: number } {
  // Desired: outer ~ 1/3 of map, middle contested ~ 1/5 of map, inner = remainder
  const outerTarget = Math.round(totalTiles / 3);
  const contestedTarget = Math.round(totalTiles / 5);

  // Outer band: pick the smallest distance d such that count(dist>=d) >= outerTarget
  let outerStart = radius;
  let outerCount = 0;
  for (let d = radius; d >= 0; d--) {
    outerCount += tilesByDist.get(d) ?? 0;
    if (outerCount >= outerTarget) {
      outerStart = d;
      break;
    }
  }

  // Contested band: pick the smallest distance d (< outerStart) such that count(d..outerStart-1) >= contestedTarget
  let contestedStart = Math.max(0, outerStart - 1);
  let contestedCount = 0;
  for (let d = outerStart - 1; d >= 0; d--) {
    contestedCount += tilesByDist.get(d) ?? 0;
    if (contestedCount >= contestedTarget) {
      contestedStart = d;
      break;
    }
  }

  return { outerStartDistance: outerStart, contestedStartDistance: contestedStart };
}

function buildZones(): { zones: StaticMapZone[]; zoneTypesByRing: { outer: number[]; mid: number[]; inner: number } } {
  // zoneTypeId mapping (from zone-types.json)
  // 1 Heartland, 2 Forest, 3 Mountains, 4 Crystal, 5 Swamp, 6 Riverlands, 7 Desert, 8 Tundra, 9 Volcanic, 10 Coast
  const rng = makeRng(`${SEED}:zones`);

  const starterZoneCount = 9;
  const contestedZoneCount = 6;
  const innerZoneCount = 4;

  // Outer ring = starter/basic zones (basic resources)
  const starterTypes = [1, 2, 6]; // plains, forest, riverlands
  // Middle ring = contested territory
  const contestedTypes = [2, 3, 5, 7, 10]; // forest, mountains, swamp, desert, coast
  // Inner = rare/high tier
  const innerTypes = [4, 8, 9]; // crystal, tundra, volcanic

  const zoneTypesByRing = {
    outer: Array.from({ length: 6 }, () => pick(rng, starterTypes)),
    mid: Array.from({ length: 6 }, () => pick(rng, contestedTypes)),
    inner: pick(rng, innerTypes)
  };

  const zones: StaticMapZone[] = [];

  for (let i = 0; i < starterZoneCount; i++) {
    zones.push({
      zoneId: 1 + i,
      name: `Starter Zone ${1 + i}`,
      zoneTypeId: pick(rng, starterTypes),
      levelRange: { min: 1, max: 12 }
    });
  }

  for (let i = 0; i < contestedZoneCount; i++) {
    zones.push({
      zoneId: 100 + i,
      name: `Contested Zone ${i + 1}`,
      zoneTypeId: pick(rng, contestedTypes),
      levelRange: { min: 12, max: 28 }
    });
  }

  for (let i = 0; i < innerZoneCount; i++) {
    zones.push({
      zoneId: 200 + i,
      name: `Inner Zone ${i + 1}`,
      zoneTypeId: pick(rng, innerTypes),
      levelRange: { min: 28, max: 50 }
    });
  }

  return { zones, zoneTypesByRing };
}

function write(): void {
  const { zones, zoneTypesByRing } = buildZones();

  const tilesWithDist: Array<{ q: number; r: number; dist: number; zoneId: number }> = [];
  const tilesByDist = new Map<number, number>();

  for (let q = -RADIUS; q <= RADIUS; q++) {
    for (let r = -RADIUS; r <= RADIUS; r++) {
      if (!inHexRadius(q, r, RADIUS)) continue;
      const dist = cubeDistance(axialToCube(q, r), { x: 0, y: 0, z: 0 });
      tilesByDist.set(dist, (tilesByDist.get(dist) ?? 0) + 1);
      tilesWithDist.push({ q, r, dist, zoneId: 0 });
    }
  }

  const thresholds = computeLayerThresholds(tilesByDist, tilesWithDist.length, RADIUS);

  const starterZoneIds = zones.filter((z) => z.zoneId < 100).map((z) => z.zoneId);
  const contestedZoneIds = zones.filter((z) => z.zoneId >= 100 && z.zoneId < 200).map((z) => z.zoneId);
  const innerZoneIds = zones.filter((z) => z.zoneId >= 200).map((z) => z.zoneId);

  const zoneIdToTypeId = new Map<number, number>(zones.map((z) => [z.zoneId, z.zoneTypeId]));

  const rng = makeRng(`${SEED}:tiles`);
  shuffleInPlace(tilesWithDist, rng);

  const tileKey = (q: number, r: number) => `${q},${r}`;
  const tileMap = new Map<string, { q: number; r: number; dist: number; zoneId: number }>(
    tilesWithDist.map((t) => [tileKey(t.q, t.r), t])
  );

  const usage = new Map<number, number>(); // zoneId -> count

  for (const t of tilesWithDist) {
    const band =
      t.dist >= thresholds.outerStartDistance
        ? 'starter'
        : t.dist >= thresholds.contestedStartDistance
          ? 'contested'
          : 'inner';

    const candidates = band === 'starter' ? starterZoneIds : band === 'contested' ? contestedZoneIds : innerZoneIds;

    const neighborZoneIds = new Set<number>();
    const neighborTypeIds = new Set<number>();
    for (const n of axialNeighbors(t.q, t.r)) {
      const nt = tileMap.get(tileKey(n.q, n.r));
      if (!nt || !nt.zoneId) continue;
      neighborZoneIds.add(nt.zoneId);
      const typeId = zoneIdToTypeId.get(nt.zoneId);
      if (typeId != null) neighborTypeIds.add(typeId);
    }

    let best: number | null = null;
    let bestScore = Number.POSITIVE_INFINITY;

    for (const zoneId of candidates) {
      const typeId = zoneIdToTypeId.get(zoneId);
      const used = usage.get(zoneId) ?? 0;
      const sameZonePenalty = neighborZoneIds.has(zoneId) ? 100000 : 0;
      const sameTypePenalty = typeId != null && neighborTypeIds.has(typeId) ? 1000 : 0;
      const balancePenalty = used; // keep distribution even-ish
      const score = sameZonePenalty + sameTypePenalty + balancePenalty;

      if (score < bestScore) {
        bestScore = score;
        best = zoneId;
      } else if (score === bestScore && rng() < 0.35) {
        best = zoneId;
      }
    }

    t.zoneId = best ?? candidates[0]!;
    usage.set(t.zoneId, (usage.get(t.zoneId) ?? 0) + 1);
  }

  const tiles: StaticMapTile[] = tilesWithDist
    .map(({ q, r, zoneId }) => ({ q, r, zoneId }))
    .sort((a, b) => a.q - b.q || a.r - b.r);

  const data = {
    version: 1,
    coordSystem: 'axial' as const,
    shape: { kind: 'hex' as const, radius: RADIUS },
    seed: SEED,
    rings: {
      outerStartDistance: thresholds.outerStartDistance,
      contestedStartDistance: thresholds.contestedStartDistance
    },
    zoneTypesByRing,
    zones,
    tiles
  };

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(data, null, 2) + '\n', 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Wrote ${outFile} (${tiles.length} tiles, radius=${RADIUS}, seed=${SEED})`);
}

write();


