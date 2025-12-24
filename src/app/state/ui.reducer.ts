import { createReducer, on } from '@ngrx/store';
import {
  closeHeroInventory,
  closeEmpirePanel,
  closeQuestLog,
  closeZoneInfo,
  openEmpirePanel,
  openHeroInventory,
  openQuestLog,
  openZoneInfo,
  toggleEmpirePanel,
  toggleHeroInventory,
  toggleQuestLog
} from './ui.actions';

export const UI_FEATURE_KEY = 'ui';

export type UiState = {
  heroInventoryOpen: boolean;
  questLogOpen: boolean;
  zoneInfoOpen: boolean;
  empirePanelOpen: boolean;
  zoneInfoTile?: { q: number; r: number; zoneId: number };
};

export const initialUiState: UiState = {
  heroInventoryOpen: false,
  questLogOpen: false,
  zoneInfoOpen: false,
  empirePanelOpen: false,
  zoneInfoTile: undefined
};

export const uiReducer = createReducer(
  initialUiState,
  on(openHeroInventory, (s: UiState) => ({ ...s, heroInventoryOpen: true })),
  on(closeHeroInventory, (s: UiState) => ({ ...s, heroInventoryOpen: false })),
  on(toggleHeroInventory, (s: UiState) => ({ ...s, heroInventoryOpen: !s.heroInventoryOpen })),
  on(openQuestLog, (s: UiState) => ({ ...s, questLogOpen: true })),
  on(closeQuestLog, (s: UiState) => ({ ...s, questLogOpen: false })),
  on(toggleQuestLog, (s: UiState) => ({ ...s, questLogOpen: !s.questLogOpen })),
  on(openZoneInfo, (s: UiState, { tile }) => ({ ...s, zoneInfoOpen: true, zoneInfoTile: tile })),
  on(closeZoneInfo, (s: UiState) => ({ ...s, zoneInfoOpen: false })),
  on(openEmpirePanel, (s: UiState) => ({ ...s, empirePanelOpen: true })),
  on(closeEmpirePanel, (s: UiState) => ({ ...s, empirePanelOpen: false })),
  on(toggleEmpirePanel, (s: UiState) => ({ ...s, empirePanelOpen: !s.empirePanelOpen }))
);


