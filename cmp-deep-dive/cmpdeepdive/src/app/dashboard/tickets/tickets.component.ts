import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { NewTicket } from './new-ticket/new-ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(newTicket: NewTicket) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: newTicket.title,
      request: newTicket.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    console.log(`id - ${id}`);
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'close',
        };
      }
      return ticket;
    });
  }
}
