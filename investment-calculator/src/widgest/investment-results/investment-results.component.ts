import { Component, input } from '@angular/core';
//MODELS
import type { AnnualData } from '../user-input/user-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  results = input.required<AnnualData>();

  // ngOnInit(): void {
  //   console.log(this.results().length);
  // }
}
