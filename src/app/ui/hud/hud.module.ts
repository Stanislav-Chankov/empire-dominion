import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HudComponent } from './hud.component';
import { HudPanelsComponent } from './hud-panels.component';
import { MinimapComponent } from './minimap/minimap.component';
import { HudAbilitiesComponent } from './abilities/hud-abilities.component';
import { HudHeroAvatarComponent } from './hero-avatar/hud-hero-avatar.component';
import { HudInventoryComponent } from './inventory/hud-inventory.component';

@NgModule({
  declarations: [
    HudComponent,
    HudPanelsComponent,
    HudHeroAvatarComponent,
    HudAbilitiesComponent,
    HudInventoryComponent,
    MinimapComponent
  ],
  imports: [CommonModule],
  exports: [HudComponent]
})
export class HudModule {}


