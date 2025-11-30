import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card-service';
import { AuthService } from '../../../services/auth-service';
import { historyCard } from '../../../interface/card';

@Component({
  selector: 'app-history-card-component',
  imports: [],
  templateUrl: './history-card-component.html',
  styleUrl: './history-card-component.css',
})
export class HistoryCardComponent implements OnInit{

  historyCardMoviment: historyCard[] = [];

  constructor (private cardService: CardService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getHistoryCard();
  }

  getHistoryCard() {
    let idUser = this.auth.getUserId();
    this.cardService.historyCard(idUser).subscribe({
      next: (res) => {
        if (res.Sucesso) {
          this.historyCardMoviment = res.Registro;
        }
        else {
          console.log(res.Resposta);
        }
      }
    })
  }
}
