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
import { ThreeEngine } from '../../core/three-engine';
import { ThreeSceneController } from '../../core/three-scene-controller';

@Component({
  selector: 'app-three-viewport',
  standalone: true,
  templateUrl: './three-viewport.component.html',
  styleUrl: './three-viewport.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeViewportComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) controller!: ThreeSceneController;

  @ViewChild('host', { static: true }) private readonly hostRef!: ElementRef<HTMLDivElement>;
  @ViewChild('canvas', { static: true }) private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

  private engine?: ThreeEngine;

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    // Prefer a hard failure over a half-initialized scene
    if (!this.controller) throw new Error('ThreeViewportComponent: controller input is required.');

    this.engine = new ThreeEngine({
      host: this.hostRef.nativeElement,
      canvas: this.canvasRef.nativeElement,
      controller: this.controller,
      dprCap: 2,
      antialias: true,
      alpha: true
    });

    this.zone.runOutsideAngular(() => this.engine?.start());
  }

  ngOnDestroy(): void {
    this.engine?.dispose();
    this.engine = undefined;
  }
}


