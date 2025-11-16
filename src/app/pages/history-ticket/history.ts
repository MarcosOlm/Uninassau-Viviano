import { Component } from '@angular/core';
import { HearderComponent } from "../../components/hearder-component/hearder-component";
import { NavegationComponent } from "../../components/navegation-component/navegation-component";
import { HistoryComponent } from "../../components/history-component/history-component";

@Component({
  selector: 'app-history',
  imports: [HearderComponent, NavegationComponent, HistoryComponent],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

}
