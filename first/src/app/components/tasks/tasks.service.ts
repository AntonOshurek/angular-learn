import { Injectable } from '@angular/core';
//DATA
import { dummyTasks } from '../../data/dummy-tasks';
//UTILS
import { generateRandomString } from '../../utils/uniq-id';
//TYPES
import type { dummyTasksType, IDummyTask } from '../../data/dummy-tasks';
import type { ISubmitedTaskData } from '../../types/task.type';

@Injectable({ providedIn: 'root' }) //for create and use only one instance of the class/service
export class TasksService {
  private storageName = 'tasks';
  private tasks: dummyTasksType;

  constructor() {
    const tasks = localStorage.getItem(this.storageName);

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = dummyTasks;
    }
  }

  private setTasksToStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string): dummyTasksType {
    return this.tasks.filter((task: IDummyTask) => task.userId === userId);
  }

  addTask(taskData: ISubmitedTaskData, userId: string) {
    const newTask: IDummyTask = Object.assign({
      id: generateRandomString(),
      userId: userId,
      ...taskData,
    });
    this.tasks.unshift(newTask);

    this.setTasksToStorage();
  }

  removeTask(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks = [
        ...this.tasks.slice(0, index),
        ...this.tasks.slice(index + 1),
      ];
    }

    this.setTasksToStorage();
  }
}
