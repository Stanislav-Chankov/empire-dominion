import { createFeatureSelector, createSelector } from '@ngrx/store';
import { API_FEATURE_KEY, ApiState } from './api.reducer';

export const selectApiState = createFeatureSelector<ApiState>(API_FEATURE_KEY);

export const selectApiOperations = createSelector(selectApiState, (s) => s.operations);

export const selectApiOperation = (id: string) =>
  createSelector(selectApiOperations, (ops) => ops[id]);


