import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-current-ticket-component',
  imports: [],
  templateUrl: './payment-current-ticket-component.html',
  styleUrl: './payment-current-ticket-component.css',
})
export class PaymentCurrentTicketComponent{

  ativo = 0;

  constructor(private router: Router) {}

  homeNavegation() {
    this.router.navigate(['']);
  }

  ativoVerification(paymentForm: number) {
    this.ativo = paymentForm;
  }

  cardNavegation() {
    this.router.navigate(['/card']);
  }
}
