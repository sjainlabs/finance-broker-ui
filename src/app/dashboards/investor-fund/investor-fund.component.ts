import { Component } from '@angular/core';

@Component({
  selector: 'app-investor-fund',
  standalone: false,
  templateUrl: './investor-fund.component.html',
  styleUrl: './investor-fund.component.css'
})
export class InvestorFundComponent {

  additionalFundRequest: number = 0;

  submitFundRequest(): void {
    if (this.additionalFundRequest > 0) {
      console.log('Fund Request:', {
        additionalFundRequest: this.additionalFundRequest,
      });

      // Add API call or service layer integration here
    } else {
      alert('Please enter a valid amount for additional funds.');
    }
  }
}
