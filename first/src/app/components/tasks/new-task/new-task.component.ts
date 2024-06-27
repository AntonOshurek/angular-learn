import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
//SERVICES
import { TasksService } from '../tasks.service';
//TYPES
import type { ISubmitedTaskData } from '../../../types/task.type';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId: string;
  @Output() close = new EventEmitter<void>();

  // enterendTitle = signal(''); //two way binding using signals. in html template we don't need to change anything in ngModel
  enterendTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const newTask: ISubmitedTaskData = {
      title: this.enterendTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.tasksService.addTask(newTask, this.userId);

    this.close.emit();
  }
}
