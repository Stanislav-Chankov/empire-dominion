import { createAction, props } from '@ngrx/store';

export const openHeroInventory = createAction('[UI] Open Inventory');
export const closeHeroInventory = createAction('[UI] Close Inventory');
export const toggleHeroInventory = createAction('[UI] Toggle Inventory');

export const openQuestLog = createAction('[UI] Open Quest Log');
export const closeQuestLog = createAction('[UI] Close Quest Log');
export const toggleQuestLog = createAction('[UI] Toggle Quest Log');

export const openZoneInfo = createAction(
  '[UI] Open Zone Info',
  props<{ tile: { q: number; r: number; zoneId: number } }>()
);
export const closeZoneInfo = createAction('[UI] Close Zone Info');

export const openEmpirePanel = createAction('[UI] Open Empire Panel');
export const closeEmpirePanel = createAction('[UI] Close Empire Panel');
export const toggleEmpirePanel = createAction('[UI] Toggle Empire Panel');


