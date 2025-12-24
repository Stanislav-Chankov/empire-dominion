import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeZoneInfo } from '../../state/ui.actions';

export type ZoneControlType = 'starting' | 'contested' | 'pvp';

export type ZoneInfoVm = {
  tileId: string;
  q: number;
  r: number;
  zoneId: number;
  zoneName: string;
  biomeName: string;
  biomeTypeId: number;
  controlType: ZoneControlType;
  levelRange: { min: number; max: number };
  resourcesGatheredPercent: number;
  questsAvailable: number;
  questsCompleted: number;
  notes: string[];
  recommendedProfessions: string[];
  hazards: string[];
};

@Component({
  selector: 'app-zone-info',
  standalone: true,
  templateUrl: './zone-info.component.html',
  styleUrl: './zone-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneInfoComponent {
  @Input({ required: true }) zone!: ZoneInfoVm;

  constructor(private readonly store: Store) {}

  close(): void {
    this.store.dispatch(closeZoneInfo());
  }

  protected get bannerUrl(): string {
    const t = this.zone.controlType;
    return t === 'starting'
      ? 'assets/zone-banners/starting.svg'
      : t === 'contested'
        ? 'assets/zone-banners/contested.svg'
        : 'assets/zone-banners/pvp.svg';
  }

  protected get controlLabel(): string {
    return this.zone.controlType === 'starting'
      ? 'Starting Zone'
      : this.zone.controlType === 'contested'
        ? 'Contested'
        : 'PvP Zone';
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') this.close();
  }
}


