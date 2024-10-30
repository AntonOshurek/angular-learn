import { Component } from '@angular/core';
//COMPONENTS
import { HeaderComponent } from '../../widgest/header/header.component';
import { UserInputComponent } from '../../widgest/user-input/user-input.component';
import { InvestmentResultsComponent } from '../../widgest/investment-results/investment-results.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
