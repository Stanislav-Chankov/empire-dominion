import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="ed-toast-host" aria-live="polite" aria-atomic="true">
      <div
        class="ed-toast"
        *ngFor="let t of toast.toasts()"
        [attr.data-kind]="t.kind"
        role="status"
      >
        <div class="ed-toast__msg">{{ t.message }}</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastContainerComponent {
  readonly toast = inject(ToastService);
}


