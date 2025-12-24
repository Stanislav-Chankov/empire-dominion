import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HudHero } from '../hud.models';

@Component({
  selector: 'app-hud-hero-avatar',
  standalone: false,
  templateUrl: './hud-hero-avatar.component.html',
  styleUrl: './hud-hero-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HudHeroAvatarComponent {
  @Input({ required: true }) hero!: HudHero;
}


