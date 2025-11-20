import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/login-registration/login-registration.spec.ts
import { LoginRegistration } from './login-registration';

describe('LoginRegistration', () => {
  let component: LoginRegistration;
  let fixture: ComponentFixture<LoginRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegistration);
========
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
>>>>>>>> 4f18be00bda197b12d84847810683dc772f98aa4:src/app/pages/payment-current-ticket/payment-current-ticket.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
