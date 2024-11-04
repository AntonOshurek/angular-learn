import { Component, input } from '@angular/core';
import type { Image } from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss',
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<string>();
}
