import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
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
  // private interval?: ReturnType<typeof setInterval>;
  private destoryRef = inject(DestroyRef);

  constructor(private serverStatusService: ServerStatusService) {}

  ngOnInit() {
    const interval = setInterval(() => {
      const serverStatus = this.serverStatusService.getServerStatus();
      this.currentStatus.set(serverStatus);
    }, 5000);

    this.destoryRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  //  OLDER APPROACH
  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
