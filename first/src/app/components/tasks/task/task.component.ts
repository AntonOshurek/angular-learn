import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
//SERVICES
import { TasksService } from '../tasks.service';
//COMPONENTS
import { CardComponent } from '../../shared/card/card.component';
//TYPES
import type { IDummyTask } from '../../../data/dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task: IDummyTask;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
