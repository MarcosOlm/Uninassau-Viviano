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
  
  currentTicketExist: boolean = false;
  date!: string
  hour!: string | null;
  codeTicket!: number | null;
  price!: number | null;


  constructor(private router: Router, private ticketService: TicketService, private auth: AuthService) { }

  ngOnInit(): void {
    this.currentTicketCheck();
    if (this.currentTicketExist) {
      this.searchPriceForMinute();
    }
  }

  currentTicketCheck() {
    let idUser = this.auth.getUserId();
    this.ticketService.currentTicketByUser(idUser).subscribe({
      next: (res) => {
        if (res.Ativo) {
          this.currentTicketExist = true;
          this.date = res.DataEntrada;
          this.hour = res.EmissaoTimeStamp;
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
    const ticketValueVerification = { CodigoTicket: this.codeTicket } as ticketVerification;
    this.ticketService.ticketVerification(ticketValueVerification).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.price = res.Estadia;
        }
      },
      error: (res) => {
        if (!res.Sucesso) {
          console.log(res);
        }
      }
    })
  }

  createTicket() {
    let idUser = this.auth.getUserId();
    this.ticketService.ticketGenerete(idUser).subscribe({
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

  searchPriceForMinute() {
    setInterval(() => {
      this.getPrice()
    }, 60000);
  }
}
