import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  userType: string = 'investor'; // Default user type
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';


  // Investor-specific fields
  investmentAmount: number = 0;
  panCard: File | null = null;
  aadhaarCard: File | null = null;

  // Loan seeker-specific fields
  loanAmount: number = 0;
  loanPurpose: string = '';
  incomeProof: File | null = null;
  idProof: File | null = null;

  onFileUpload(event: any, type: string): void {
    const file = event.target.files[0];
    if (type === 'pan') this.panCard = file;
    else if (type === 'aadhaar') this.aadhaarCard = file;
    else if (type === 'income') this.incomeProof = file;
    else if (type === 'id') this.idProof = file;
  }

  submitRegistration(): void {
    if (this.userType === 'investor') {
      if (this.name && this.email && this.phone && this.password && this.investmentAmount > 0 && this.panCard && this.aadhaarCard) {
        console.log('New Investor Registration:', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          investmentAmount: this.investmentAmount,
          panCard: this.panCard.name,
          aadhaarCard: this.aadhaarCard.name
        });
        // API call to register new investor
      } else {
        alert('Please fill in all required investor details.');
      }
    } else if (this.userType === 'loan-seeker') {
      if (this.name && this.email && this.phone && this.password && this.loanAmount > 0 && this.loanPurpose && this.incomeProof && this.idProof) {
        console.log('Loan Seeker Registration:', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          loanAmount: this.loanAmount,
          loanPurpose: this.loanPurpose,
          incomeProof: this.incomeProof.name,
          idProof: this.idProof.name
        });
        // API call to register loan seeker
      } else {
        alert('Please fill in all required loan seeker details.');
      }
    }
  }


}
