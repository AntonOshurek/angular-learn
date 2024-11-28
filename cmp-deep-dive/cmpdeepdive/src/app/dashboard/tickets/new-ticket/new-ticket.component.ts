import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { NewTicket } from './new-ticket.model';

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
  add = output<NewTicket>();

  onSubmit(evt: Event, titleInput: HTMLInputElement) {
    evt.preventDefault();

    const formElement = evt.target as HTMLFormElement;

    const formData = new FormData(formElement);

    const data: NewTicket = {
      title: formData.get('title') as string,
      text: formData.get('request') as string,
    };

    // console.log(titleInput.value);

    this.add.emit(data);

    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
