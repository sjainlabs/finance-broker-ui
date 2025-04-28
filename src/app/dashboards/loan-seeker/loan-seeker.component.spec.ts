import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSeekerComponent } from './loan-seeker.component';

describe('LoanSeekerComponent', () => {
  let component: LoanSeekerComponent;
  let fixture: ComponentFixture<LoanSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
