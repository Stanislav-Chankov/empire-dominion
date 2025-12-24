import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComponentsModule } from '../../components/components.module';
import { closeQuestLog } from '../../state/ui.actions';
import { HudQuest } from '../hud/hud.models';

@Component({
  selector: 'app-quest-log',
  standalone: true,
  templateUrl: './quest-log.component.html',
  styleUrl: './quest-log.component.scss',
  imports: [ComponentsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestLogComponent implements OnInit {
  @Input({ required: true }) heroName!: string;
  @Input({ required: true }) quests!: HudQuest[];

  protected selectedQuestId?: string;
  protected query = '';

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.selectedQuestId ??= this.visibleQuests[0]?.id;
  }

  protected selectQuest(id: string): void {
    this.selectedQuestId = id;
  }

  protected setQuery(value: string): void {
    this.query = value;

    // Keep selection valid for the filtered list.
    const visible = this.visibleQuests;
    if (!visible.length) {
      this.selectedQuestId = undefined;
      return;
    }
    if (this.selectedQuestId && visible.some((q) => q.id === this.selectedQuestId)) return;
    this.selectedQuestId = visible[0].id;
  }

  protected get visibleQuests(): HudQuest[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.quests;
    return this.quests.filter((it) => {
      return (
        it.title.toLowerCase().includes(q) ||
        it.zone.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q)
      );
    });
  }

  protected get selectedQuest(): HudQuest | undefined {
    const list = this.visibleQuests;
    if (!this.selectedQuestId) return list[0];
    return list.find((q) => q.id === this.selectedQuestId) ?? list[0];
  }

  close(): void {
    this.store.dispatch(closeQuestLog());
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') this.close();
  }
}


