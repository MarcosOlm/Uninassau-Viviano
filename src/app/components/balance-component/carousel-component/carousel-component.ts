import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card-service';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent {

  cards: any[] = [];
  @Output() arrayLength = new EventEmitter<number>();

  constructor(private router: Router, private cardService: CardService) {
    this.getAllCards();
  }

  cardNavegation(id: number) {
    this.router.navigate(['/card', id]);
  }

  cardSolicitationNavegation() {
  this.router.navigate(['/card_solicitation']);
  }

  getAllCards(): void {
    this.cardService.searchAllCards().subscribe({
      next: (cards) => {
        this.cards = [...cards.Cartoes]
        this.arrayLength.emit(this.cards.length);
    }
    });
  }
}
