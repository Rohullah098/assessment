import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule,FormsModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  selectedIcon: string = '';
  icons = ['bi-chat-left-text', 'bi-telephone', 'bi-cup', 'bi-file-text'];
  timelineItems = [
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
      this.newItem.description = 'Newly added timeline item.';
    } else {
      alert('Please enter text and select an icon!');
    }
  }

  // Remove a timeline item
  removeItem(item: any) {
    this.timelineItems = this.timelineItems.filter((i) => i !== item);
  }
}
