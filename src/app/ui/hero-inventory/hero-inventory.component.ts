import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeHeroInventory } from '../../state/ui.actions';
import { HeroEquipment, WowEquipmentSlot } from './hero-inventory.models';

type HeroDisplay = {
  raceClass: string;
  HeroName: string;
};

@Component({
  selector: 'app-hero-inventory',
  standalone: true,
  templateUrl: './hero-inventory.component.html',
  styleUrl: './hero-inventory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInventoryComponent {
  @Input({ required: true }) hero!: HeroDisplay;
  @Input({ required: true }) equipment!: HeroEquipment;

  protected readonly leftSlots: WowEquipmentSlot[] = [
    'Head',
    'Neck',
    'Shoulder',
    'Back',
    'Chest',
    'Shirt',
    'Tabard',
    'Wrist'
  ];

  protected readonly rightSlots: WowEquipmentSlot[] = [
    'Hands',
    'Waist',
    'Legs',
    'Feet',
    'Ring1',
    'Ring2',
    'Trinket1',
    'Trinket2'
  ];

  protected readonly weaponSlots: WowEquipmentSlot[] = ['MainHand', 'OffHand'];

  constructor(private readonly store: Store) {}

  close(): void {
    this.store.dispatch(closeHeroInventory());
  }
}


