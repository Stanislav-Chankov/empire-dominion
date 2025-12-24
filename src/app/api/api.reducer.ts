import { createReducer, on } from '@ngrx/store';
import {
  apiOperationCleared,
  apiOperationCompleted,
  apiOperationFailed,
  apiOperationReceived,
  apiOperationRequested
} from './api.actions';
import { ApiOperation, ApiRequest } from './api.models';

export const API_FEATURE_KEY = 'api';

export type ApiState = {
  operations: Record<string, ApiOperation>;
};

export const initialApiState: ApiState = {
  operations: {}
};

function normalizeRequest(id: string, request: ApiRequest): ApiRequest {
  return { ...request, id };
}

export const apiReducer = createReducer(
  initialApiState,
  on(apiOperationRequested, (s, { id, request, nowMs }) => {
    return {
      ...s,
      operations: {
        ...s.operations,
        [id]: {
          id,
          request: normalizeRequest(id, request),
          phase: 'requested',
          receivedAtMs: nowMs
        }
      }
    };
  }),
  on(apiOperationReceived, (s, { id, envelope }) => ({
    ...s,
    operations: {
      ...s.operations,
      [id]: {
        ...(s.operations[id] ?? {
          id,
          request: { id },
          receivedAtMs: 0,
          phase: 'requested'
        }),
        phase: 'received',
        envelope
      }
    }
  })),
  on(apiOperationCompleted, (s, { id, envelope }) => ({
    ...s,
    operations: {
      ...s.operations,
      [id]: {
        ...(s.operations[id] ?? {
          id,
          request: { id },
          receivedAtMs: 0,
          phase: 'requested'
        }),
        phase: 'completed',
        envelope
      }
    }
  })),
  on(apiOperationFailed, (s, { id, error, message }) => ({
    ...s,
    operations: {
      ...s.operations,
      [id]: {
        ...(s.operations[id] ?? {
          id,
          request: { id },
          receivedAtMs: 0,
          phase: 'requested'
        }),
        phase: 'failed',
        envelope: message ? { success: false, message } : s.operations[id]?.envelope,
        error
      }
    }
  })),
  on(apiOperationCleared, (s, { id }) => {
    const { [id]: _, ...rest } = s.operations;
    return { ...s, operations: rest };
  })
);


