import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from '../../types/Item';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {

  @Input({ required: true }) timelineItems!: TimelineItem[]
  @Output() event: EventEmitter<TimelineItem> = new EventEmitter();

  removeItem(item: TimelineItem) {
    this.event.emit(item);
  }

}
