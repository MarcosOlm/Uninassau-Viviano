import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket-service';
import { AuthService } from '../../services/auth-service';
import { allTicketResponse, currentTicketResponse, ticketGenereteResponse, ticketPayment, ticketPaymentResponse, ticketVerification, ticketVerificationResponse } from '../../interface/ticket';

@Component({
  selector: 'app-current-ticket-component',
  imports: [],
  templateUrl: './current-ticket-component.html',
  styleUrl: './current-ticket-component.css'
})
export class CurrentTicketComponent implements OnInit {
  idUser!: number | null;
  timeNow = new Date();
  currentTicketExist: boolean = false;
  date!: string | null;
  codeTicket!: number | null;
  price!: number | null;

  
constructor(private router: Router, private ticketService: TicketService, private auth: AuthService) {}

  ngOnInit(): void {
    this.currentTicketCheck();
  }

  currentTicketCheck() {
    this.idUser = this.auth.getUserId();
    this.ticketService.currentTicketByUser(this.idUser).subscribe({
      next: (res) => {
        if (res.Ativo) {
          console.log(res)
          this.currentTicketExist = true;
          this.date = res.EmissaoTimeStamp;
          this.codeTicket = res.CodigoTicket;
          this.getPrice();
        }
        else {
          this.currentTicketExist = false;
        }
      },
      error: (res) => {
        console.log(res);
      }
    });
  }

  getPrice() {
    const ticketValueVerification = {CodigoTicket: this.codeTicket} as ticketVerification;
    this.ticketService.ticketVerification(ticketValueVerification).subscribe({
        next: (res) => {
          if (res.Sucesso) {
            this.price = res.Estadia;
          }
        },
        error: (res) => {
          console.log(res)
        }
    })
  }

  createTicket(user: number | null) {
    this.ticketService.ticketGenerete(user).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.codeTicket = res.Numeracao;
          this.currentTicketExist = true;
          this.currentTicketCheck();
        }
      }
    });
  }

  paymentCurrentTicketNavegation() {
    this.router.navigate(['payment_current_ticket']);
  }
}
