import { Component, inject, Input } from '@angular/core';
//SERVICES
import { TasksService } from '../tasks.service';
//TYPES
import type { IDummyTask } from '../../../data/dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task: IDummyTask;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
