import * as THREE from 'three';
import { disposeObject3D } from '../core/three-dispose';
import { ThreeContext, ThreeSceneController, ThreeSize } from '../core/three-scene-controller';

export class BasicCubeScene implements ThreeSceneController {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;

  private cube?: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;
  private grid?: THREE.GridHelper;

  createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1020);
    this.scene = scene;
    return scene;
  }

  createCamera(_size: ThreeSize): THREE.Camera {
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 1.25, 3.5);
    this.camera = camera;
    return camera;
  }

  init(_ctx: ThreeContext): void {
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 1.0);
    dir.position.set(3, 4, 2);
    this.scene.add(dir);

    const grid = new THREE.GridHelper(10, 10, 0x2b3557, 0x162044);
    grid.position.y = -0.5;
    this.scene.add(grid);
    this.grid = grid;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f7cff,
      metalness: 0.2,
      roughness: 0.35
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0.25;
    this.scene.add(cube);
    this.cube = cube;
  }

  update(_dt: number, _elapsed: number): void {
    if (!this.cube) return;
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.013;
  }

  dispose(): void {
    // dispose geometries/materials/textures under this scene
    disposeObject3D(this.scene);

    // detach explicit references
    this.cube = undefined;
    this.grid = undefined;
  }
}


