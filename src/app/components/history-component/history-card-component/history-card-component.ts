import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card-service';
import { AuthService } from '../../../services/auth-service';
import { historyCard } from '../../../interface/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-card-component',
  imports: [],
  templateUrl: './history-card-component.html',
  styleUrl: './history-card-component.css',
})
export class HistoryCardComponent implements OnInit{

  historyCardMoviment: historyCard[] = [];
  historyCard: boolean = true;

  constructor (private cardService: CardService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getHistoryCard();
  }

  getHistoryCard() {
    let idUser = this.auth.getUserId();
    this.cardService.historyCard(idUser).subscribe({
      next: (res) => {
        if (res.Sucesso && res.Registro[0] != null) {
          this.historyCardMoviment = res.Registro;
          this.historyCard = true;
        }
        if (!res.Sucesso) {
          console.log(res.Resposta);
        }
        if (res.Registro[0] == null) {
          this.historyCard = false;
        }
      }
    })
  }

  cardSolicitationNavegation() {
    this.router.navigate(['/card_solicitation']);
  }
}
