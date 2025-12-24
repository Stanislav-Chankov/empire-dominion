import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HexWorldMapScene } from '../../three/scenes/hex-world-map.scene';
import { HudState } from './hud.models';

@Component({
  selector: 'app-hud',
  standalone: false,
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HudComponent {
  @Input({ required: true }) state!: HudState;
  @Input() mapScene?: HexWorldMapScene;
}


