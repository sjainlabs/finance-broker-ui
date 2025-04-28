import { Component } from '@angular/core';

interface Investment {
  id: number;
  name: string;
  amount: number;
  date: string;
  returns: number;
  status: string;
}

@Component({
  selector: 'app-investment-portfolio',
  standalone: false,
  templateUrl: './investment-portfolio.component.html',
  styleUrl: './investment-portfolio.component.css'
})
export class InvestmentPortfolioComponent {
  investments: Investment[] = [];
  totalInvestment: number = 0;
  totalReturns: number = 0;
  activeTab: string = 'portfolio'; // Default tab: Portfolio


  ngOnInit(): void {
    // Load mock data
    this.investments = [
      { id: 1, name: 'Real Estate Fund', amount: 5000, date: '2025-01-15', returns: 8, status: 'Active' },
      { id: 2, name: 'Tech Startup', amount: 3000, date: '2024-10-12', returns: 15, status: 'Completed' },
      { id: 3, name: 'Green Energy Bond', amount: 2000, date: '2024-03-10', returns: 10, status: 'Completed' }
    ];

    // Calculate total investment and returns
    this.totalInvestment = this.investments.reduce((sum, inv) => sum + inv.amount, 0);
    this.totalReturns = this.investments.reduce((sum, inv) => sum + (inv.amount * inv.returns) / 100, 0);
  }

  switchTab(tab: string): void {
    this.activeTab = tab; // Switch between tabs
  }
}
