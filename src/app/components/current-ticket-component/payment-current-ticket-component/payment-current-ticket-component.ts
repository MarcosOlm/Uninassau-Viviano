import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsOptionsComponent } from "../cards-options-component/cards-options-component";
import { TicketService } from '../../../services/ticket-service';
import { AuthService } from '../../../services/auth-service';
import { ticketPayment, ticketVerification } from '../../../interface/ticket';

@Component({
  selector: 'app-payment-current-ticket-component',
  imports: [CardsOptionsComponent],
  templateUrl: './payment-current-ticket-component.html',
  styleUrl: './payment-current-ticket-component.css',
})
export class PaymentCurrentTicketComponent implements OnInit{
  ativo = 0;
  carouselLength: boolean = true;
  timeNow = new Date();
  date!: string | null;
  codeTicket!: number | null;
  price!: number | null;
  paymentMethod: string = 'PIX';
  idCard!: number;

  constructor(private router: Router, private ticketService: TicketService, private auth: AuthService) {}

  ngOnInit(): void {
    this.ticketVerification();
  }

  onSubmit(): void {
    let payment = {IdCard: this.idCard, CodigoTicket: this.codeTicket, FormaPagamento: this.paymentMethod} as ticketPayment;
    this.ticketService.ticketPayment(payment).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.router.navigate(['/']);
        }
        else {
          alert(res.Resposta);
        }
      }
    });
  }

  ticketVerification() {
    let idUser = this.auth.getUserId(); 
    this.ticketService.currentTicketByUser(idUser).subscribe({
      next: (res) => {
        if (res.Ativo) {
          this.date = res.EmissaoTimeStamp;
          this.codeTicket = res.CodigoTicket;
          this.getPrice()
        }
      }
    })
  }

  getPrice() {
    const ticketValueVerification = {CodigoTicket: this.codeTicket} as ticketVerification;
    this.ticketService.ticketVerification(ticketValueVerification).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.price = res.Estadia;
        }
      }
    })
  }

  paymentMethodChange(method: string) {
    this.paymentMethod = method;
  }

  idCardCheck($event: number) {
    this.idCard = $event;
  }

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
