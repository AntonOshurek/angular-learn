import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
//SERVICES
import { UserInputService } from './user-input.service';
//TYPES
import { AnnualData, InvestmentParameters } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  private userInputService: UserInputService;

  constructor(userInputService: UserInputService) {
    this.userInputService = userInputService;
  }

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestmens = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');

  investmentParams = output<AnnualData>();

  onSubmit() {
    const investmentParameters: InvestmentParameters = {
      initialInvestment: Number(this.enteredInitialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestmens()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    };

    const annualData =
      this.userInputService.calculateInvestmentResults(investmentParameters);

    this.investmentParams.emit(annualData);
  }
}
