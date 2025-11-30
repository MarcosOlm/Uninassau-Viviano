import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card-service';

@Component({
  selector: 'app-cards-options-component',
  imports: [],
  templateUrl: './cards-options-component.html',
  styleUrl: './cards-options-component.css',
})
export class CardsOptionsComponent {

  @Output() cardIdEmitter = new EventEmitter();
  cardId!: number;
  cards: any[] = [];

  constructor(private router: Router, private cardService: CardService) {
    this.getAllCards();
  }

  getAllCards(): void {
    this.cardService.searchAllCards().subscribe({
      next: (cards) => {
        this.cards = [...cards.Cartoes]
        this.cards = this.cards.sort((a, b) => a.Tipo.localeCompare(b.Tipo));
    }
    });
  }

  getIdCard(cardId: number) {
    this.cardId = cardId;
    this.cardIdEmitter.emit(this.cardId);
  }
}