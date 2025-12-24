import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, UiState } from './ui.reducer';

export const selectUiState = createFeatureSelector<UiState>(UI_FEATURE_KEY);

export const selectHeroInventoryOpen = createSelector(
  selectUiState,
  (s: UiState) => s.heroInventoryOpen
);

export const selectQuestLogOpen = createSelector(selectUiState, (s: UiState) => s.questLogOpen);

export const selectZoneInfoOpen = createSelector(selectUiState, (s: UiState) => s.zoneInfoOpen);
export const selectZoneInfoTile = createSelector(selectUiState, (s: UiState) => s.zoneInfoTile);

export const selectEmpirePanelOpen = createSelector(selectUiState, (s: UiState) => s.empirePanelOpen);


