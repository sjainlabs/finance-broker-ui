import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorFundComponent } from './investor-fund.component';

describe('InvestorFundComponent', () => {
  let component: InvestorFundComponent;
  let fixture: ComponentFixture<InvestorFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestorFundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
