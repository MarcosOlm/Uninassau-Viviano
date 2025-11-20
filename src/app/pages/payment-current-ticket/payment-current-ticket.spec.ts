import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentCurrentTicket } from './payment-current-ticket';

describe('PaymentCurrentTicket', () => {
  let component: PaymentCurrentTicket;
  let fixture: ComponentFixture<PaymentCurrentTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCurrentTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCurrentTicket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
