import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-ticket-component',
  imports: [],
  templateUrl: './current-ticket-component.html',
  styleUrl: './current-ticket-component.css'
})
export class CurrentTicketComponent {

  constructor(private router: Router) {}

  paymentCurrentTicketNavegation() {
    this.router.navigate(['payment_current_ticket']);
  }
}
