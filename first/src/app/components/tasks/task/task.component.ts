import { Component, EventEmitter, Input, Output } from '@angular/core';
//TYPES
import type { IDummyTask } from '../../../data/dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
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
