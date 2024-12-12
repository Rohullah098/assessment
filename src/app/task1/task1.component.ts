import { Component } from '@angular/core';
import { TimelineComponent } from "../components/timeline/timeline.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimelineItem } from '../types/Item';

@Component({
  selector: 'app-task1',
  imports: [TimelineComponent, FormsModule, CommonModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss'
})
export class Task1Component {
  selectedIcon: string = 'bi-chat-left-text';
  selectedText: string = 'meeting'
  icons = ['bi-chat-left-text', 'bi-telephone', 'bi-cup', 'bi-file-text'];

  timelineItems: TimelineItem[] = [
    {
      date: '12/10/24',
      icon: 'bi-chat-left-text',
      text: 'You had a meeting with Milton Romaguera',
      description: 'And a more formal meeting.',
    },
    {
      date: '12/9/24',
      icon: 'bi-telephone',
      text: 'You had a call with Milton Romaguera',
      description: 'Then we had a follow-up phone call.',
    },
  ];


  newItem = {
    icon: 'bi-chat-left-text',
    text: '',
    date: '',
    description: '',
  };
  timerInterval: any;

  constructor() {
    this.timerInterval = setInterval(() => {
      this.updateTimelineDates();
    }, 60000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  // Select an icon
  selectIcon(icon: string) {
    switch (icon) {
      case 'bi-chat-left-text':
        this.selectedText = `meeting`;
        break;
      case 'bi-telephone':
        this.selectedText = `call`;
        break;
      case 'bi-cup':
        this.selectedText = `coffee`;
        break;
      case 'bi-file-text':
        this.selectedText = `note`;
        break;
      default:
        this.selectedText = '';
        break;
    }
    this.newItem.icon = icon;
    this.selectedIcon = icon;
  }

  onTextInput(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    if (inputElement) {
      this.newItem.description = inputElement.value;
    }
  }

  // Add new timeline item
  addItem() {
    if (this.newItem.description && this.newItem.icon) {
      this.newItem.date = new Date().toLocaleString();
      const text = `You had a ${this.selectedText} with Milton Romaguera`;
      this.timelineItems.unshift({ ...this.newItem, text: text });
      this.newItem.text = '';
      this.newItem.icon = '';
      this.selectedIcon = '';
      this.newItem.description = '';
    } else {
      alert('Please enter text and select an icon!');
    }
  }

  handleEvent(item: TimelineItem) {
    this.timelineItems = this.timelineItems.filter((i) => i !== item);
  }

  updateTimelineDates(): void {
    this.timelineItems.forEach((item) => {
      item.date = new Date(item.date).toISOString(); // Recalculate the date to trigger the pipe again
    });
  }

}
