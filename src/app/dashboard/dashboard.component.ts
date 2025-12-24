import { Component } from '@angular/core';
import { BasicCubeScene } from '../three/scenes/basic-cube.scene';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // In a real app you can swap this scene controller to render a different dashboard scene.
  readonly scene = new BasicCubeScene();
}


