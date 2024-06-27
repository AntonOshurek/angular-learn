import { Component, EventEmitter, Input, Output } from '@angular/core';
//TYPES
import type { IDummyTask } from '../../../data/dummy-tasks';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent],
})
export class TaskComponent {
  @Input({ required: true }) task: IDummyTask;
  @Output() complete = new EventEmitter<string>();

  get transformedDateForView(): string {
    if (this.task.dueDate) {
      const dt = new Date(this.task.dueDate);
      const options: Intl.DateTimeFormatOptions = {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'UTC',
      };
      return Intl.DateTimeFormat('en-EN', options).format(dt);
    } else {
      return '';
    }
  }

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
