import { createAction, props } from '@ngrx/store';
import { ApiEnvelope, ApiRequest } from './api.models';

export const apiOperationRequested = createAction(
  '[API] Operation Requested',
  props<{ id: string; request: ApiRequest; nowMs: number }>()
);

export const apiOperationReceived = createAction(
  '[API] Operation Received',
  props<{ id: string; envelope: ApiEnvelope<unknown>; nowMs: number }>()
);

export const apiOperationCompleted = createAction(
  '[API] Operation Completed',
  props<{ id: string; envelope: ApiEnvelope<unknown>; nowMs: number }>()
);

export const apiOperationFailed = createAction(
  '[API] Operation Failed',
  props<{ id: string; error: unknown; message?: string; nowMs: number }>()
);

export const apiOperationCleared = createAction('[API] Operation Cleared', props<{ id: string }>());


