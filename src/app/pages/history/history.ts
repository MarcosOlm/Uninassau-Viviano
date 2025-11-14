import { Component } from '@angular/core';
import { HearderComponent } from "../../components/hearder-component/hearder-component";
import { HistoryComponent } from "../../components/history-component/history-component";
import { NavegationComponent } from "../../components/navegation-component/navegation-component";

@Component({
  selector: 'app-history',
  imports: [HearderComponent, HistoryComponent, NavegationComponent],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

}
