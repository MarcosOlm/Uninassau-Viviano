import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CardService } from '../../../services/card-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent implements OnInit{

  cards: any[] = [];
  @Output() arrayLength = new EventEmitter<number>();

  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit(): void {
    this.getAllCards();
    this.router.events.pipe(filter(events => events instanceof NavigationEnd)).subscribe(() => this.getAllCards());
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
        if (cards.Cartoes != null) {
          this.cards = [...cards.Cartoes]
          this.cards = this.cards.sort((a, b) => a.Tipo.localeCompare(b.Tipo));
        }
        this.arrayLength.emit(this.cards.length);
    }
    });
  }
}
