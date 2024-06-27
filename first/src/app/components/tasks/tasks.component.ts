import { Component, Input } from '@angular/core';
//COMPONENTS
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
//DATA
import { dummyTasks } from '../../data/dummy-tasks';
//UTILS
import { generateRandomString } from '../../utils/uniq-id';
//TYPES
import type { dummyTasksType, IDummyTask } from '../../data/dummy-tasks';
import type { ISubmitedTaskData } from '../../types/task.type';

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

  tasks: dummyTasksType = dummyTasks;

  isAddingTask: boolean = false;

  get selectedUserTasks(): dummyTasksType {
    return this.tasks.filter((task: IDummyTask) => {
      return task.userId === this.userId;
    });
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: ISubmitedTaskData) {
    const newTask: IDummyTask = Object.assign({
      id: generateRandomString(),
      userId: this.userId,
      ...taskData,
    });
    this.tasks.unshift(newTask);

    this.onCancelAddTask();
  }
}
