import { Injectable, signal } from '@angular/core';
//MODELS
import type {
  AnnualData,
  InvestmentParameters,
} from './model/investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  private _anualData = signal<AnnualData>([]);

  calculateInvestmentResults = (
    investmentParameters: InvestmentParameters
  ): void => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentParameters;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this._anualData.set(annualData);
  };

  get anualData() {
    return this._anualData();
  }
}
