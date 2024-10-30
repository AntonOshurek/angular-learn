import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
//SERVICES
import { InvestmentService } from '../../features/investment/investment.service';
//TYPES
import type { InvestmentParameters } from '../../features/investment/model/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('1000');
  enteredAnnualInvestmens = signal('500');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    const investmentParameters: InvestmentParameters = {
      initialInvestment: Number(this.enteredInitialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestmens()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    };

    this.investmentService.calculateInvestmentResults(investmentParameters);
  }
}
