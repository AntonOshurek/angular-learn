import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<ISubmitedTaskData>();
  // enterendTitle = signal(''); //two way binding using signals. in html template we don't need to change anything in ngModel
  enterendTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enterendTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
