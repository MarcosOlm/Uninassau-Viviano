import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCurrentTicketComponent } from './payment-current-ticket-component';

describe('PaymentCurrentTicketComponent', () => {
  let component: PaymentCurrentTicketComponent;
  let fixture: ComponentFixture<PaymentCurrentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCurrentTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCurrentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
