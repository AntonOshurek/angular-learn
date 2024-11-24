import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent {
  // @ViewChild('#form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(evt: Event, titleInput: HTMLInputElement) {
    evt.preventDefault();

    const formElement = evt.target as HTMLFormElement;

    const formData = new FormData(formElement);

    console.log(formData);
    console.log(titleInput.value);

    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
