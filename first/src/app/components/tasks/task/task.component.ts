import { Component, Input } from '@angular/core';
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

  transformedDateForView(): string {
    const dt = new Date(this.task.dueDate);
    const options: Intl.DateTimeFormatOptions = {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'UTC',
    };
    return Intl.DateTimeFormat('en-EN', options).format(dt);
  }
}
