import { Injectable } from '@angular/core';
import { ServerStatusEnum } from './server-status.enum';

@Injectable()
export class ServerStatusService {
  constructor() {}

  getServerStatus(): ServerStatusEnum {
    const rnd = Math.random();

    if (rnd < 0.5) {
      return ServerStatusEnum.online;
    } else if (rnd < 0.9) {
      return ServerStatusEnum.offline;
    } else {
      return ServerStatusEnum.unknown;
    }
  }
}
