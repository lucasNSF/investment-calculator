import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentCalculatorService } from '../investment-calculator.service';
import { IAnnualInvestment } from '../IAnnualInvestment';
import { IAnnualInvestmentResult } from '../IAnnualInvestmentResult';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<number>(500);
  annualInvestment = signal<number>(100);
  expectedReturn = signal<number>(1000);
  duration = signal<number>(1);
  calculationResult = output<IAnnualInvestmentResult[]>();
  private investmentCalculatorService = inject(InvestmentCalculatorService);

  onSubmit() {
    const data: IAnnualInvestment = {
      annualInvestment: this.annualInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn(),
      initialInvestment: this.initialInvestment(),
    };

    const result = this.investmentCalculatorService.calculateInvestmentResults(data);

    this.calculationResult.emit(result);
  }
}
