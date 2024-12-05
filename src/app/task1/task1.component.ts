import { Component } from '@angular/core';
import { TimelineComponent } from "../components/timeline/timeline.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../types/Item';

@Component({
  selector: 'app-task1',
  imports: [TimelineComponent,FormsModule,CommonModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss'
})
export class Task1Component {
  selectedIcon: string = '';
  icons = ['bi-chat-left-text', 'bi-telephone', 'bi-cup', 'bi-file-text'];

  timelineItems: TimelineItem[] = [
    {
      date: '3d',
      icon: 'bi-chat-left-text',
      text: 'You had a meeting with Milton Romaguera',
      description: 'And a more formal meeting.',
    },
    {
      date: '5d',
      icon: 'bi-telephone',
      text: 'You had a call with Milton Romaguera',
      description: 'Then we had a follow-up phone call.',
    },
  ];


  newItem = {
    icon: '',
    text: '',
    date: 'Now',
    description: '',
  };
   // Select an icon
   selectIcon(icon: string) {
    this.newItem.icon = icon;
    this.selectedIcon=icon;
  }

  // Add new timeline item
  addItem() {
    if (this.newItem.text && this.newItem.icon) {
      this.timelineItems.unshift({ ...this.newItem });
      this.newItem.text = '';
      this.newItem.icon = '';
      this.selectedIcon='';
      this.newItem.description = 'Newly added timeline item.';
    } else {
      alert('Please enter text and select an icon!');
    }
  }

  handleEvent(item: TimelineItem) {
    this.timelineItems = this.timelineItems.filter((i) => i !== item);
  }
}
