import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HudAbility } from '../hud.models';

@Component({
  selector: 'app-hud-abilities',
  standalone: false,
  templateUrl: './hud-abilities.component.html',
  styleUrl: './hud-abilities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HudAbilitiesComponent {
  @Input({ required: true }) abilities!: HudAbility[];
}


