import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogListComponent } from './log-list/log-list.component';

@NgModule({
  declarations: [LogListComponent],
  imports: [CommonModule],
  exports: [LogListComponent]
})
export class ComponentsModule {}


