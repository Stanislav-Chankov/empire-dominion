import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concat, map, of, switchMap, timer } from 'rxjs';
import {
  apiOperationCompleted,
  apiOperationFailed,
  apiOperationReceived,
  apiOperationRequested
} from './api.actions';
import { ApiClientService } from './api-client.service';
import { ApiEnvelope, ApiRequest } from './api.models';
import { ToastService } from '../notifications/toast.service';

@Injectable()
export class ApiEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(ApiClientService);
  private readonly toast = inject(ToastService);

  run$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiOperationRequested),
      switchMap(({ id, request }) => {
        const transport = request.transport ?? 'http';

        if (transport === 'local') {
          const receivedEnvelope: ApiEnvelope<unknown> = {
            success: true,
            message: request.receivedMessage ?? 'Operation received.',
            correlationId: id,
            phase: 'received'
          };

          const completedEnvelope: ApiEnvelope<unknown> = {
            success: true,
            message: request.completedMessage ?? 'Operation completed.',
            correlationId: id,
            phase: 'completed'
          };

          const completionDelay = request.simulateCompletionAfterMs ?? 1200;

          return concat(
            of(apiOperationReceived({ id, envelope: receivedEnvelope, nowMs: Date.now() })),
            timer(completionDelay).pipe(
              map(() => apiOperationCompleted({ id, envelope: completedEnvelope, nowMs: Date.now() }))
            )
          );
        }

        const normalized: ApiRequest = { ...request, id, transport: 'http' };
        return this.api.request<unknown>(normalized).pipe(
          switchMap((envelope) => {
            const next: ApiEnvelope<unknown> = { ...envelope, correlationId: envelope.correlationId ?? id };
            const phase = next.phase ?? 'completed';

            if (phase === 'received') {
              return of(apiOperationReceived({ id, envelope: next, nowMs: Date.now() }));
            }

            return of(apiOperationCompleted({ id, envelope: next, nowMs: Date.now() }));
          }),
          catchError((error) =>
            of(
              apiOperationFailed({
                id,
                error,
                message: 'Request failed.',
                nowMs: Date.now()
              })
            )
          )
        );
      })
    )
  );

  /**
   * Toast: show success when the operation is "received" successfully (as requested).
   */
  toastOnReceivedSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiOperationReceived),
        map(({ envelope }) => {
          if (!envelope?.success) return;
          const msg = envelope.message?.trim();
          if (msg) this.toast.success(msg);
        })
      ),
    { dispatch: false }
  );

  toastOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiOperationFailed),
        map(({ message }) => {
          this.toast.error(message ?? 'Request failed.');
        })
      ),
    { dispatch: false }
  );
}


