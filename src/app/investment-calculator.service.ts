import { Injectable } from "@angular/core";

import { IAnnualInvestment } from "./IAnnualInvestment";
import { IAnnualInvestmentResult } from "./IAnnualInvestmentResult";

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {
  calculateInvestmentResults(
    { annualInvestment, duration, expectedReturn, initialInvestment }: IAnnualInvestment
  ): IAnnualInvestmentResult[] {
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
  }
}
