import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-log-list',
  standalone: false,
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogListComponent {
  @Input({ required: true }) label!: string;
  @Input() count?: number;
  @Input() ariaLabel?: string;

  @HostBinding('class.dragging') dragging = false;

  private dragScroll?: {
    pointerId: number;
    startY: number;
    startScrollTop: number;
    moved: boolean;
  };

  onScrollAreaPointerDown(ev: PointerEvent): void {
    if (ev.button !== 0) return;
    const el = ev.currentTarget as HTMLElement | null;
    if (!el) return;

    this.dragScroll = {
      pointerId: ev.pointerId,
      startY: ev.clientY,
      startScrollTop: el.scrollTop,
      moved: false
    };
    this.dragging = true;

    try {
      el.setPointerCapture(ev.pointerId);
    } catch {
      // ignore
    }

    ev.preventDefault();
  }

  onScrollAreaPointerMove(ev: PointerEvent): void {
    if (!this.dragScroll) return;
    if (ev.pointerId !== this.dragScroll.pointerId) return;
    const el = ev.currentTarget as HTMLElement | null;
    if (!el) return;

    const dy = ev.clientY - this.dragScroll.startY;
    if (!this.dragScroll.moved && Math.abs(dy) > 3) this.dragScroll.moved = true;

    el.scrollTop = this.dragScroll.startScrollTop - dy;
    if (this.dragScroll.moved) ev.preventDefault();
  }

  onScrollAreaPointerUp(ev: PointerEvent): void {
    if (!this.dragScroll) return;
    if (ev.pointerId !== this.dragScroll.pointerId) return;
    const el = ev.currentTarget as HTMLElement | null;

    try {
      el?.releasePointerCapture(ev.pointerId);
    } catch {
      // ignore
    }

    this.dragScroll = undefined;
    this.dragging = false;
  }
}


