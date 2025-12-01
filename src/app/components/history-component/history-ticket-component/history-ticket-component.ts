import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket-service';
import { AuthService } from '../../../services/auth-service';
import { allTicket } from '../../../interface/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-ticket-component',
  imports: [],
  templateUrl: './history-ticket-component.html',
  styleUrl: './history-ticket-component.css',
})
export class HistoryTicketComponent implements OnInit{

  ticket: allTicket[] = [];
  historyTicket: boolean = true;

  constructor(private ticketService: TicketService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getAllticket();
  }

  getAllticket() {
    let idUser = this.auth.getUserId();
    this.ticketService.allticketByUser(idUser).subscribe({
      next: (res) => {
        if (res.Sucesso && res.Tickets[0] != null) {
          this.ticket = res.Tickets;
          this.historyTicket = true;
        }
        if (!res.Sucesso) {
          console.log(res.Resposta);
        }
        if(res.Tickets[0] == null) {
          this.historyTicket = false;
        }
      }
    })
  }

  ticketSolicitationNavegation() {
    this.router.navigate(['/']);
  }

}
