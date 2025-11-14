import { Component } from '@angular/core';
import { BalanceComponent } from "../../components/balance-component/balance-component";
import { CurrentTicketComponent } from "../../components/current-ticket-component/current-ticket-component";

@Component({
  selector: 'app-home',
  imports: [BalanceComponent, CurrentTicketComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
