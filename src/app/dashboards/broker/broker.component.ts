import {Component, OnInit} from '@angular/core';

interface LoanRequest {
  id: number;
  borrower: string;
  amount: number;
  status: string;
  investor: string;
}

@Component({
  selector: 'app-broker',
  standalone: false,
  templateUrl: './broker.component.html',
  styleUrl: './broker.component.css'
})
export class BrokerComponent implements  OnInit{
  loanRequests: LoanRequest[] = []; // Loan requests managed by the broker

  ngOnInit(): void {
    // Load mock data or fetch it from an API
    this.loanRequests = [
      { id: 1, borrower: 'John Doe', amount: 10000, status: 'Pending', investor: 'Investor A' },
      { id: 2, borrower: 'Jane Smith', amount: 5000, status: 'Approved', investor: 'Investor B' },
      { id: 3, borrower: 'David Lee', amount: 8000, status: 'Rejected', investor: '-' },
    ];
  }

  approveRequest(id: number): void {
    const request = this.loanRequests.find(req => req.id === id);
    if (request) {
      request.status = 'Approved';
    }
  }

  rejectRequest(id: number): void {
    const request = this.loanRequests.find(req => req.id === id);
    if (request) {
      request.status = 'Rejected';
    }
  }

}
