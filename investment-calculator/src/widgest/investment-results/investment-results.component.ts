import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
//SERVICES
import { InvestmentService } from '../../features/investment/investment.service';
//MODELS
import type { AnnualData } from '../../features/investment/model/investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  // we can also use this approach if we need a constructor and we don't use standAlone components
  // constructor(private investmentService: InvestmentService) {}

  anualData = computed<AnnualData>(() => {
    return this.investmentService.anualData;
  });
}
