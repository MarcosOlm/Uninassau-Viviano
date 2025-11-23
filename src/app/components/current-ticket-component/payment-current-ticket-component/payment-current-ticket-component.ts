import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from "../../balance-component/carousel-component/carousel-component";

@Component({
  selector: 'app-payment-current-ticket-component',
  imports: [CarouselComponent],
  templateUrl: './payment-current-ticket-component.html',
  styleUrl: './payment-current-ticket-component.css',
})
export class PaymentCurrentTicketComponent {

  ativo = 0;
  carouselLength: boolean = true;

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

  arrayLength(event: number): void {
    if(event == 0){
      this.carouselLength = false
    } 
  }
}
