import { Component, signal } from '@angular/core';
//COMPONENTS
import { HeaderComponent } from '../../widgest/header/header.component';
import { UserInputComponent } from '../../widgest/user-input/user-input.component';
import { InvestmentResultsComponent } from '../../widgest/investment-results/investment-results.component';
//MODELS
import type { AnnualData } from '../../widgest/user-input/user-input.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  annualData = signal<AnnualData>([]);

  onUserInput(annualData: AnnualData) {
    this.annualData.set(annualData);
  }
}
