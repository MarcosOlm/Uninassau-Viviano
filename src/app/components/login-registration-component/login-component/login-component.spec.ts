import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/payment-current-ticket/payment-current-ticket.spec.ts
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
========
import { LoginComponent } from './login-component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
>>>>>>>> marcos:src/app/components/login-registration-component/login-component/login-component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
