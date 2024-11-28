import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  ngOnInit() {
    console.log(this.data());
  }

  onToogleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((prev) => !prev);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
