import { Injectable } from '@angular/core';
//MODELS
import type { InvestmentParameters, AnnualData } from './user-input.model';

@Injectable({ providedIn: 'root' })
export class UserInputService {
  calculateInvestmentResults = (
    investmentParameters: InvestmentParameters
  ): AnnualData => {
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

    return annualData;
  };
}
