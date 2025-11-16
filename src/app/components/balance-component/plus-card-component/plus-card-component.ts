import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-card-component',
  imports: [],
  templateUrl: './plus-card-component.html',
  styleUrl: './plus-card-component.css',
})
export class PlusCardComponent {
  
  constructor(private router: Router) {}

  homeNavegation() {
    this.router.navigate(['']);
  }
}
