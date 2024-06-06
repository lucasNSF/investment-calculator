import { Component, signal } from '@angular/core';

import type { IAnnualInvestmentResult } from './IAnnualInvestmentResult';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  investmentResults = signal<IAnnualInvestmentResult[] | undefined>(undefined);

  onCalculationResult(result: IAnnualInvestmentResult[]) {
    this.investmentResults.set(result);
  }
}
