import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


interface loanApplications {
  id: number;
  amount: number;
  status: string;
}
@Component({
  selector: 'app-loan-seeker',
  standalone: false,
  templateUrl: './loan-seeker.component.html',
  styleUrl: './loan-seeker.component.css'
})
export class LoanSeekerComponent implements OnInit {
  loanForm!: FormGroup;
  loanApplications  = [
    { id: 1, amount: 5000, status: 'Pending' },
    { id: 2, amount: 8000, status: 'Approved' },
    { id: 3, amount: 3000, status: 'Rejected' },
  ];

  activeTab: string = 'apply'; // Default active tab

  constructor(private fb: FormBuilder,private router: Router) {

  }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1000)]],
      purpose: ['', [Validators.required, Validators.minLength(3)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }
  submitApplication(): void {
    if (this.loanForm.valid) {
      const loanApplication = this.loanForm.value;
      console.log('Loan Application Submitted:', loanApplication);
      // Integrate API call here to save the application
    }
  }

  cancelApplication(id: number): void {
    this.loanApplications = this.loanApplications.filter(app => app.id !== id);
    console.log('Application Canceled:', id);
  }

  goToRegistration(): void {
    this.router.navigate(['/register']);
  }

}
