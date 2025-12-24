import * as THREE from 'three';
import { ThreeSceneController, ThreeSize } from './three-scene-controller';

export type ThreeEngineOptions = {
  host: HTMLElement;
  canvas: HTMLCanvasElement;
  controller: ThreeSceneController;
  antialias?: boolean;
  alpha?: boolean;
  /**
   * Cap DPR for perf. Typical production value is 2.
   */
  dprCap?: number;
};

export class ThreeEngine {
  private readonly opts: Required<Pick<ThreeEngineOptions, 'antialias' | 'alpha' | 'dprCap'>> &
    Omit<ThreeEngineOptions, 'antialias' | 'alpha' | 'dprCap'>;

  private resizeObserver?: ResizeObserver;
  private rafId?: number;
  private running = false;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.Camera;

  private lastTs = 0;
  private elapsed = 0;

  constructor(options: ThreeEngineOptions) {
    this.opts = {
      antialias: options.antialias ?? true,
      alpha: options.alpha ?? true,
      dprCap: options.dprCap ?? 2,
      ...options
    };
  }

  start(): void {
    if (this.running) return;
    this.running = true;

    this.createRenderer();

    const size = this.computeSize();
    this.scene = this.opts.controller.createScene();
    this.camera = this.opts.controller.createCamera(size);

    this.applySize(size);

    this.opts.controller.init({
      host: this.opts.host,
      canvas: this.opts.canvas,
      renderer: this.renderer,
      scene: this.scene,
      camera: this.camera,
      size
    });

    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const next = this.computeSize(width, height);
      this.applySize(next);
      this.opts.controller.onResize?.(next);
    });
    this.resizeObserver.observe(this.opts.host);

    this.lastTs = performance.now();
    this.loop();
  }

  stop(): void {
    if (!this.running) return;
    this.running = false;

    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.rafId = undefined;
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
  }

  dispose(): void {
    this.stop();
    this.opts.controller.dispose();
    this.renderer?.dispose();
    // Optional: aggressively release GPU resources (sometimes useful for SPAs with heavy scenes)
    // this.renderer?.forceContextLoss();
  }

  private createRenderer(): void {
    const { canvas } = this.opts;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: this.opts.antialias,
      alpha: this.opts.alpha
    });
  }

  private computeSize(width?: number, height?: number): ThreeSize {
    const rect = this.opts.host.getBoundingClientRect();
    const w = Math.max(1, Math.floor(width ?? rect.width));
    const h = Math.max(1, Math.floor(height ?? rect.height));
    const dpr = Math.min(window.devicePixelRatio ?? 1, this.opts.dprCap);
    return { width: w, height: h, dpr };
  }

  private applySize(size: ThreeSize): void {
    this.renderer.setPixelRatio(size.dpr);
    this.renderer.setSize(size.width, size.height, false);

    // Keep camera projection correct when it's a PerspectiveCamera / OrthographicCamera
    const cam = this.camera as THREE.PerspectiveCamera | THREE.OrthographicCamera;
    if ((cam as THREE.PerspectiveCamera).isPerspectiveCamera) {
      (cam as THREE.PerspectiveCamera).aspect = size.width / size.height;
      (cam as THREE.PerspectiveCamera).updateProjectionMatrix();
    } else if ((cam as THREE.OrthographicCamera).isOrthographicCamera) {
      // If you use ortho cameras, you likely want your controller.onResize to update frustum.
      (cam as THREE.OrthographicCamera).updateProjectionMatrix();
    }
  }

  private loop(): void {
    const tick = (ts: number) => {
      if (!this.running) return;
      const dt = Math.min(0.1, Math.max(0, (ts - this.lastTs) / 1000)); // clamp for tab switching
      this.lastTs = ts;
      this.elapsed += dt;

      this.opts.controller.update(dt, this.elapsed);
      this.renderer.render(this.scene, this.camera);

      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }
}


