import { Component } from '@angular/core';

@Component({
  selector: 'app-investor',
  standalone: false,
  templateUrl: './investor.component.html',
  styleUrl: './investor.component.css'
})
export class InvestorComponent {
  activeTab: string = 'portfolio';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }
}
