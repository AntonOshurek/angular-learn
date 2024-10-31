import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import type { dummyTrafficData } from './app.model';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TraficComponent } from './dashboard/trafic/trafic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TraficComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
