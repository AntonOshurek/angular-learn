import { Component } from '@angular/core';
//COMPONENTS
import { HeaderComponent } from '../../widgest/header/header.component';
import { UserInputComponent } from '../../widgest/user-input/user-input.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
