import * as THREE from 'three';

export type ThreeSize = { width: number; height: number; dpr: number };

export type ThreeContext = {
  host: HTMLElement;
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  size: ThreeSize;
};

export interface ThreeSceneController {
  /**
   * Create a scene instance (objects can be added in init()).
   */
  createScene(): THREE.Scene;

  /**
   * Create a camera. Engine will keep aspect/projection up to date on resize.
   */
  createCamera(size: ThreeSize): THREE.Camera;

  /**
   * Called once after renderer/scene/camera are created and sized.
   */
  init(ctx: ThreeContext): void;

  /**
   * Called every frame before rendering.
   * @param dt Seconds since last frame
   * @param elapsed Total seconds since start
   */
  update(dt: number, elapsed: number): void;

  /**
   * Called after the engine resizes the renderer/camera.
   */
  onResize?(size: ThreeSize): void;

  /**
   * Must dispose any geometries/materials/textures and remove event listeners.
   */
  dispose(): void;
}


