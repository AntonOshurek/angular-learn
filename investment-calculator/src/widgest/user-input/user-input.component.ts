import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
//TYPES
import { InvestmentParameters } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestmens = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');

  investmentParams = output<InvestmentParameters>();

  onSubmit() {
    const investmentParameters: InvestmentParameters = {
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestmens(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    };

    this.investmentParams.emit(investmentParameters);
  }
}
