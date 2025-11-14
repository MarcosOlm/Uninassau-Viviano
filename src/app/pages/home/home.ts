import { Component } from '@angular/core';
import { BalanceComponent } from "../../components/balance-component/balance-component";
import { CurrentTicketComponent } from "../../components/current-ticket-component/current-ticket-component";
import { HearderComponent } from "../../components/hearder-component/hearder-component";
import { NavegationComponent } from "../../components/navegation-component/navegation-component";

@Component({
  selector: 'app-home',
  imports: [BalanceComponent, CurrentTicketComponent, HearderComponent, NavegationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
