import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ThreeViewportComponent } from '../three/components/three-viewport/three-viewport.component';
import { HeroInventoryComponent } from '../ui/hero-inventory/hero-inventory.component';
import { QuestLogComponent } from '../ui/quest-log/quest-log.component';
import { ZoneInfoComponent } from '../ui/zone-info/zone-info.component';
import { EmpirePanelComponent } from '../ui/empire-panel/empire-panel.component';
import { HudModule } from '../ui/hud/hud.module';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    ThreeViewportComponent,
    HudModule,
    HeroInventoryComponent,
    QuestLogComponent,
    ZoneInfoComponent,
    EmpirePanelComponent
  ]
})
export class MapModule {}


