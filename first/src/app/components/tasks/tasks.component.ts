import { Component, Input } from '@angular/core';
//SERVICES
import { TasksService } from './tasks.service';
//COMPONENTS
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
//TYPES
import type { dummyTasksType } from '../../data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId: string;
  @Input({ required: true }) name: string;
  private tasksService: TasksService;

  // constructor(private tasksService: TasksService) // we can also create depInjection in this way
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  isAddingTask: boolean = false;

  get selectedUserTasks(): dummyTasksType {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
