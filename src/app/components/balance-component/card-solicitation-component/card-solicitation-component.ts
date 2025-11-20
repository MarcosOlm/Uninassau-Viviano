import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-solicitation-component',
  imports: [],
  templateUrl: './card-solicitation-component.html',
  styleUrl: './card-solicitation-component.css',
})
export class CardSolicitationComponent {

  constructor(private router: Router) {}

  homeNavegation() {
    this.router.navigate(['']);
  }
}
