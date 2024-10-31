import { Component, input, signal } from '@angular/core';
import type { dummyTrafficData } from '../../app.model';

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.scss',
})
export class TraficComponent {
  dummyTrafficData = signal<dummyTrafficData>([
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ]);
  maxTraffic = signal<number>(
    Math.max(...this.dummyTrafficData().map((data) => data.value))
  );
}