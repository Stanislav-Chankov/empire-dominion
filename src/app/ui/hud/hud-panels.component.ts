import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { HexWorldMapScene } from '../../three/scenes/hex-world-map.scene';
import { toggleQuestLog } from '../../state/ui.actions';
import { HudState } from './hud.models';

@Component({
  selector: 'app-hud-panels',
  standalone: false,
  templateUrl: './hud-panels.component.html',
  styleUrl: './hud-panels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HudPanelsComponent {
  @Input({ required: true }) state!: HudState;
  @Input() mapScene?: HexWorldMapScene;

  constructor(private readonly store: Store) {}

  toggleQuestLog(): void {
    this.store.dispatch(toggleQuestLog());
  }
}


