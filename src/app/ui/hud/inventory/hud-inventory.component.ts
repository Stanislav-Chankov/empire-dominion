import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleHeroInventory } from '../../../state/ui.actions';
import { HudItem } from '../hud.models';

type HudInventory = {
  main: (HudItem | null)[];
  backpack: (HudItem | null)[];
  stash: (HudItem | null)[];
};

@Component({
  selector: 'app-hud-inventory',
  standalone: false,
  templateUrl: './hud-inventory.component.html',
  styleUrl: './hud-inventory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HudInventoryComponent {
  @Input({ required: true }) gold!: number;
  @Input({ required: true }) inventory!: HudInventory;

  constructor(private readonly store: Store) {}

  toggleHeroInventory(): void {
    this.store.dispatch(toggleHeroInventory());
  }
}


