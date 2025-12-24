import * as THREE from 'three';

export function disposeMaterial(material: THREE.Material): void {
  const m = material as THREE.Material & { [key: string]: unknown };
  // Best-effort dispose of common texture slots (Three doesn't have a unified interface for them)
  const possibleTextureKeys = [
    'map',
    'alphaMap',
    'aoMap',
    'bumpMap',
    'displacementMap',
    'emissiveMap',
    'envMap',
    'lightMap',
    'metalnessMap',
    'normalMap',
    'roughnessMap'
  ] as const;

  for (const key of possibleTextureKeys) {
    const value = m[key] as unknown;
    if (value instanceof THREE.Texture) value.dispose();
  }

  material.dispose();
}

export function disposeObject3D(root: THREE.Object3D): void {
  root.traverse((obj) => {
    // geometries
    const mesh = obj as THREE.Mesh;
    const geometry = (mesh as any).geometry as THREE.BufferGeometry | undefined;
    if (geometry) geometry.dispose();

    // materials
    const material = (mesh as any).material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(material)) material.forEach(disposeMaterial);
    else if (material) disposeMaterial(material);
  });
}


