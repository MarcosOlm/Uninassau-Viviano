import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket-service';
import { AuthService } from '../../../services/auth-service';
import { allTicket } from '../../../interface/ticket';

@Component({
  selector: 'app-history-ticket-component',
  imports: [],
  templateUrl: './history-ticket-component.html',
  styleUrl: './history-ticket-component.css',
})
export class HistoryTicketComponent implements OnInit{
  ticket: allTicket[] = [];

  constructor(private ticketService: TicketService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getAllticket();
  }

  getAllticket() {
    let idUser = this.auth.getUserId();
    this.ticketService.allticketByUser(idUser).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.ticket = res.Tickets;
        }
        else {
          console.log(res.Resposta);
        }
      }
    })
  }

}
