import { Component, Input } from '@angular/core';
//COMPONENTS
import { TaskComponent } from './task/task.component';
//DATA
import { dummyTasks } from '../../dummy-tasks';
import type { dummyTasksType, IDummyTask } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId: string;
  @Input({ required: true }) name: string;

  tasks: dummyTasksType = dummyTasks;

  get selectedUserTasks(): dummyTasksType {
    return (this.tasks = dummyTasks.filter((task: IDummyTask) => {
      return task.userId === this.userId;
    }));
  }
}
