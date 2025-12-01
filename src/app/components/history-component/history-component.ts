import { Component } from '@angular/core';
import { HistoryTicketComponent } from "./history-ticket-component/history-ticket-component";
import { HistoryCardComponent } from "./history-card-component/history-card-component";

@Component({
  selector: 'app-history-component',
  imports: [HistoryTicketComponent, HistoryCardComponent],
  templateUrl: './history-component.html',
  styleUrl: './history-component.css',
})
export class HistoryComponent {
  options: boolean = true;
  option: string = 'tickets';

  ticket() {
    this.options = true;
    this.option = 'tickets';
  }

  card() {
    this.options = false;
    this.option = 'cartões'
  }
}
