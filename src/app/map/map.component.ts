import { Component, DestroyRef, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { HexWorldMapScene } from '../three/scenes/hex-world-map.scene';
import { createMockHudState } from '../ui/hud/hud.mock';
import { HudState } from '../ui/hud/hud.models';
import { openZoneInfo } from '../state/ui.actions';
import {
  selectEmpirePanelOpen,
  selectHeroInventoryOpen,
  selectQuestLogOpen,
  selectZoneInfoOpen,
  selectZoneInfoTile
} from '../state/ui.selectors';
import { HeroEquipment } from '../ui/hero-inventory/hero-inventory.models';
import { ZoneInfoVm } from '../ui/zone-info/zone-info.component';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private readonly store = inject(Store);
  private readonly destroyRef = inject(DestroyRef);

  readonly scene = new HexWorldMapScene();
  readonly hud: HudState = createMockHudState();

  readonly heroInventoryOpen$ = this.store.select(selectHeroInventoryOpen);
  readonly questLogOpen$ = this.store.select(selectQuestLogOpen);
  readonly zoneInfoOpen$ = this.store.select(selectZoneInfoOpen);
  readonly empirePanelOpen$ = this.store.select(selectEmpirePanelOpen);
  readonly zoneInfoTile$ = this.store.select(selectZoneInfoTile);

  constructor() {
    // Hook tile clicks from the Three scene into NgRx UI state.
    this.scene.setTileClickHandler((tile) => {
      // Guard: only one tile at a time (disable clicks while modal open).
      this.scene.setSelectedTile(tile.q, tile.r);
      this.store.dispatch(openZoneInfo({ tile }));
    });

    // When any modal is open, disable tile clicks so underlying interactions can't happen.
    combineLatest([this.zoneInfoOpen$, this.heroInventoryOpen$, this.questLogOpen$, this.empirePanelOpen$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([zoneInfoOpen, heroInvOpen, questLogOpen, empirePanelOpen]) => {
        this.scene.setTileClickEnabled(!(zoneInfoOpen || heroInvOpen || questLogOpen || empirePanelOpen));
        if (!zoneInfoOpen) this.scene.clearSelectedTile();
      });
  }

  protected zoneInfoFromTile(tile: { q: number; r: number; zoneId: number }): ZoneInfoVm {
    const z = this.scene.getZoneById(tile.zoneId);
    const controlType = this.scene.getControlTypeForAxial(tile.q, tile.r);

    const biomeTypeId = z?.zoneTypeId ?? 1;
    const biomeName = biomeTypeName(biomeTypeId);
    const zoneName = z?.name ?? (tile.zoneId ? `Zone ${tile.zoneId}` : 'Wilderness');
    const levelRange = z?.levelRange ?? (controlType === 'starting'
      ? { min: 1, max: 12 }
      : controlType === 'contested'
        ? { min: 12, max: 28 }
        : { min: 28, max: 50 });

    // Deterministic "player progress" mock (replace later with real profile/progress).
    const seed = Math.abs(tile.zoneId * 2654435761 + tile.q * 73856093 + tile.r * 19349663) >>> 0;
    const resourcesGatheredPercent = 18 + (seed % 73); // 18..90
    const questsAvailable =
      controlType === 'starting' ? 8 + (seed % 7) : controlType === 'contested' ? 10 + (seed % 9) : 12 + (seed % 10);
    const questsCompleted = Math.min(questsAvailable, Math.floor((resourcesGatheredPercent / 100) * questsAvailable));

    const notes =
      controlType === 'starting'
        ? [
            'Low threat patrols; ideal for gathering and first contracts.',
            'Faster travel between nodes; plenty of basic reagents.',
            'NPC caravans occasionally spawn vendor restocks.'
          ]
        : controlType === 'contested'
          ? [
              'Mixed threats and roaming elites; bring consumables.',
              'Resource nodes can be interrupted by skirmishes.',
              'Expect dynamic events that open temporary quest chains.'
            ]
          : [
              'High risk: enemy hunters and dangerous elites.',
              'Rare nodes appear after combat events; stay mobile.',
              'Control points rotate—watch for ambushes.'
            ];

    const recommendedProfessions =
      biomeTypeId === 2
        ? ['Herbalism', 'Alchemy', 'Skinning']
        : biomeTypeId === 3
          ? ['Mining', 'Blacksmithing', 'Engineering']
          : biomeTypeId === 6
            ? ['Fishing', 'Cooking', 'Alchemy']
            : biomeTypeId === 9
              ? ['Mining', 'Engineering', 'Alchemy']
              : ['Gathering', 'Cooking', 'Crafting'];

    const hazards =
      controlType === 'starting'
        ? ['Wandering critters', 'Minor debuffs near ruins']
        : controlType === 'contested'
          ? ['Roaming elites', 'Skirmish events', 'Ambush patrols']
          : ['PvP ambushes', 'Elite packs', 'Zone-wide hazards during events'];

    return {
      tileId: `${tile.q},${tile.r}`,
      q: tile.q,
      r: tile.r,
      zoneId: tile.zoneId,
      zoneName,
      biomeName,
      biomeTypeId,
      controlType,
      levelRange,
      resourcesGatheredPercent,
      questsAvailable,
      questsCompleted,
      notes,
      recommendedProfessions,
      hazards
    };
  }

  // WoW-like equipment slots (prototype mock)
  readonly equipment: HeroEquipment = {
    Head: { id: 'head-1', name: 'Cowl of the Green Flame', slot: 'Head', rarity: 'rare' },
    Neck: { id: 'neck-1', name: 'Pendant of Hexes', slot: 'Neck', rarity: 'common' },
    Shoulder: { id: 'shoulder-1', name: 'Mantle of Thorns', slot: 'Shoulder', rarity: 'rare' },
    Back: { id: 'back-1', name: 'Cloak of Night Winds', slot: 'Back', rarity: 'common' },
    Chest: { id: 'chest-1', name: 'Robes of the Warlock', slot: 'Chest', rarity: 'rare' },
    Wrist: { id: 'wrist-1', name: 'Bindings of Focus', slot: 'Wrist', rarity: 'common' },
    Hands: { id: 'hands-1', name: 'Gloves of Rituals', slot: 'Hands', rarity: 'common' },
    Waist: { id: 'waist-1', name: 'Runed Sash', slot: 'Waist', rarity: 'common' },
    Legs: { id: 'legs-1', name: 'Legwraps of Embers', slot: 'Legs', rarity: 'rare' },
    Feet: { id: 'feet-1', name: 'Boots of Quiet Steps', slot: 'Feet', rarity: 'common' },
    Ring1: { id: 'ring-1', name: 'Band of Sparks', slot: 'Ring1', rarity: 'common' },
    Ring2: { id: 'ring-2', name: 'Emerald Signet', slot: 'Ring2', rarity: 'rare' },
    Trinket1: { id: 'trinket-1', name: 'Totem of Echoes', slot: 'Trinket1', rarity: 'common' },
    Trinket2: { id: 'trinket-2', name: 'Charm of Warding', slot: 'Trinket2', rarity: 'common' },
    MainHand: { id: 'mh-1', name: 'Staff of Verdant Power', slot: 'MainHand', rarity: 'epic' },
    OffHand: { id: 'oh-1', name: 'Hex Tome', slot: 'OffHand', rarity: 'rare' }
  };
}

function biomeTypeName(zoneTypeId: number): string {
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
      return 'Unknown Biome';
  }
}


