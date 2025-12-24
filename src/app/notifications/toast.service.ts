import { ApplicationRef, EnvironmentInjector, Injectable, createComponent, inject, signal } from '@angular/core';
import { ToastContainerComponent } from './toast-container.component';
import { ToastItem, ToastKind } from './toast.models';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly appRef = inject(ApplicationRef);
  private readonly envInjector = inject(EnvironmentInjector);

  readonly toasts = signal<ToastItem[]>([]);

  private hostEl?: HTMLElement;

  success(message: string, ttlMs = 2600): void {
    this.show('success', message, ttlMs);
  }

  error(message: string, ttlMs = 3800): void {
    this.show('error', message, ttlMs);
  }

  info(message: string, ttlMs = 2600): void {
    this.show('info', message, ttlMs);
  }

  private show(kind: ToastKind, message: string, ttlMs: number): void {
    this.ensureContainer();

    const item: ToastItem = {
      id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
      kind,
      message,
      createdAtMs: Date.now(),
      ttlMs
    };

    this.toasts.update((list) => [...list, item].slice(-5));
    setTimeout(() => this.remove(item.id), ttlMs);
  }

  private remove(id: string): void {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }

  private ensureContainer(): void {
    if (this.hostEl) return;

    const cmp = createComponent(ToastContainerComponent, {
      environmentInjector: this.envInjector
    });
    this.appRef.attachView(cmp.hostView);

    const el = cmp.location.nativeElement as HTMLElement;
    document.body.appendChild(el);
    this.hostEl = el;
  }
}


