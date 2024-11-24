import { Component, OnInit, signal } from '@angular/core';
import { ServerStatusEnum } from './server-status.enum';
import { ServerStatusService } from './server-status.service';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  providers: [ServerStatusService],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<ServerStatusEnum>(ServerStatusEnum.online);

  constructor(private serverStatusService: ServerStatusService) {}

  ngOnInit() {
    setInterval(() => {
      this.currentStatus.set(this.serverStatusService.getServerStatus());
    }, 5000);
  }
}
