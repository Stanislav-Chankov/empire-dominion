import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeEmpirePanel, toggleEmpirePanel } from '../../state/ui.actions';
import { selectEmpirePanelOpen } from '../../state/ui.selectors';
import { ComponentsModule } from '../../components/components.module';
import { HudEmpire, HudEmpireTroop, HudEmpireWorker } from '../hud/hud.models';

@Component({
  selector: 'app-empire-panel',
  standalone: true,
  imports: [AsyncPipe, ComponentsModule],
  templateUrl: './empire-panel.component.html',
  styleUrl: './empire-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpirePanelComponent {
  @Input({ required: true }) empire!: HudEmpire;

  readonly open$: Observable<boolean>;

  protected tab: 'troops' | 'workers' | 'resources' = 'troops';
  constructor(private readonly store: Store) {
    this.open$ = this.store.select(selectEmpirePanelOpen);
  }

  toggle(): void {
    this.store.dispatch(toggleEmpirePanel());
  }

  close(): void {
    this.store.dispatch(closeEmpirePanel());
  }

  protected setTab(tab: 'troops' | 'workers' | 'resources'): void {
    this.tab = tab;
  }

  occupiedCount(list: Array<HudEmpireTroop | HudEmpireWorker>): number {
    return list.reduce((acc, it) => acc + (it.assignment ? 1 : 0), 0);
  }

  idleCount(list: Array<HudEmpireTroop | HudEmpireWorker>): number {
    return list.length - this.occupiedCount(list);
  }

  protected get availableResources(): Array<{
    id: string;
    name: string;
    category: 'Gathering' | 'Crafting';
    fromZoneTypeIds: number[];
  }> {
    const zoneTypeIds = new Set(this.empire.zoneTypeIds ?? []);

    // Zone types are the same ids used in the world map static data (see `biomeTypeName` in MapComponent).
    // We keep this mapping local for now so the panel can run from mock data.
    const gatheringByZone: Record<number, Array<{ id: string; name: string }>> = {
      1: [
        { id: 'grain', name: 'Grain' },
        { id: 'clay', name: 'Clay' }
      ],
      2: [
        { id: 'timber', name: 'Timber' },
        { id: 'herbs', name: 'Herbs' },
        { id: 'hides', name: 'Hides' }
      ],
      3: [
        { id: 'iron_ore', name: 'Iron Ore' },
        { id: 'stone', name: 'Stone' },
        { id: 'gems', name: 'Gems' }
      ],
      4: [
        { id: 'crystals', name: 'Crystals' },
        { id: 'mushrooms', name: 'Cave Mushrooms' }
      ],
      5: [
        { id: 'reeds', name: 'Reeds' },
        { id: 'bog_iron', name: 'Bog Iron' }
      ],
      6: [
        { id: 'fish', name: 'Fish' },
        { id: 'flax', name: 'Flax' }
      ],
      7: [
        { id: 'salt', name: 'Salt' },
        { id: 'spice', name: 'Spice' }
      ],
      8: [
        { id: 'fur', name: 'Fur' },
        { id: 'ice', name: 'Ice Shards' }
      ],
      9: [
        { id: 'sulfur', name: 'Sulfur' },
        { id: 'obsidian', name: 'Obsidian' }
      ],
      10: [
        { id: 'seaweed', name: 'Seaweed' },
        { id: 'coral', name: 'Coral' }
      ]
    };

    const craftingDefs: Array<{ id: string; name: string; requires: string[] }> = [
      { id: 'planks', name: 'Planks', requires: ['timber'] },
      { id: 'ingots', name: 'Iron Ingots', requires: ['iron_ore'] },
      { id: 'leather', name: 'Leather', requires: ['hides'] },
      { id: 'potions', name: 'Potions', requires: ['herbs'] },
      { id: 'rations', name: 'Rations', requires: ['fish', 'grain'] },
      { id: 'stone_blocks', name: 'Stone Blocks', requires: ['stone'] },
      { id: 'thread', name: 'Thread', requires: ['flax'] }
    ];

    const gathered: Map<string, { id: string; name: string; fromZoneTypeIds: number[] }> = new Map();
    for (const [ztRaw, list] of Object.entries(gatheringByZone)) {
      const zt = Number(ztRaw);
      if (!zoneTypeIds.has(zt)) continue;
      for (const r of list) {
        const prev = gathered.get(r.id);
        if (prev) prev.fromZoneTypeIds.push(zt);
        else gathered.set(r.id, { ...r, fromZoneTypeIds: [zt] });
      }
    }

    const crafting: Array<{ id: string; name: string; fromZoneTypeIds: number[] }> = [];
    for (const c of craftingDefs) {
      const ok = c.requires.some((req) => gathered.has(req));
      if (!ok) continue;
      const from = new Set<number>();
      c.requires.forEach((req) => gathered.get(req)?.fromZoneTypeIds.forEach((zt) => from.add(zt)));
      crafting.push({ id: c.id, name: c.name, fromZoneTypeIds: Array.from(from).sort((a, b) => a - b) });
    }

    const out: Array<{ id: string; name: string; category: 'Gathering' | 'Crafting'; fromZoneTypeIds: number[] }> = [];
    for (const r of Array.from(gathered.values()).sort((a, b) => a.name.localeCompare(b.name))) {
      out.push({ id: r.id, name: r.name, category: 'Gathering', fromZoneTypeIds: r.fromZoneTypeIds.sort((a, b) => a - b) });
    }
    for (const c of crafting.sort((a, b) => a.name.localeCompare(b.name))) {
      out.push({ id: c.id, name: c.name, category: 'Crafting', fromZoneTypeIds: c.fromZoneTypeIds });
    }
    return out;
  }

  protected get availableWorkerTypes(): { gatherers: string[]; crafters: string[] } {
    const resources = this.availableResources;
    const gatherers = new Set<string>();
    const crafters = new Set<string>();

    resources
      .filter((r) => r.category === 'Gathering')
      .forEach((r) => {
        switch (r.id) {
          case 'timber':
            gatherers.add('Lumberjacks');
            break;
          case 'herbs':
            gatherers.add('Herbalists');
            break;
          case 'hides':
          case 'fur':
            gatherers.add('Hunters');
            break;
          case 'iron_ore':
          case 'bog_iron':
            gatherers.add('Miners');
            break;
          case 'stone':
            gatherers.add('Quarrymen');
            break;
          case 'fish':
            gatherers.add('Fishers');
            break;
          case 'flax':
            gatherers.add('Farmhands');
            break;
          case 'crystals':
            gatherers.add('Delvers');
            break;
          default:
            gatherers.add('Gatherers');
        }
      });

    resources
      .filter((r) => r.category === 'Crafting')
      .forEach((r) => {
        switch (r.id) {
          case 'planks':
            crafters.add('Carpenters');
            break;
          case 'ingots':
            crafters.add('Smelters');
            crafters.add('Blacksmiths');
            break;
          case 'leather':
            crafters.add('Tanners');
            break;
          case 'potions':
            crafters.add('Alchemists');
            break;
          case 'rations':
            crafters.add('Cooks');
            break;
          case 'stone_blocks':
            crafters.add('Masons');
            break;
          case 'thread':
            crafters.add('Weavers');
            break;
          default:
            crafters.add('Crafters');
        }
      });

    return {
      gatherers: Array.from(gatherers).sort((a, b) => a.localeCompare(b)),
      crafters: Array.from(crafters).sort((a, b) => a.localeCompare(b))
    };
  }

  protected zoneTypeLabel(zoneTypeId: number): string {
    switch (zoneTypeId) {
      case 1:
        return 'Heartland Plains';
      case 2:
        return 'Ancient Forest';
      case 3:
        return 'Highland Mountains';
      case 4:
        return 'Crystal Caves';
      case 5:
        return 'Swamp Mire';
      case 6:
        return 'Riverlands';
      case 7:
        return 'Desert Badlands';
      case 8:
        return 'Tundra Frostwild';
      case 9:
        return 'Volcanic Wastes';
      case 10:
        return 'Coastal Isles';
      default:
        return `Zone Type ${zoneTypeId}`;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') this.close();
  }
}


