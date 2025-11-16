import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation-component',
  imports: [],
  templateUrl: './navegation-component.html',
  styleUrl: './navegation-component.css',
})
export class NavegationComponent {
  
constructor(private router: Router) {}

profileNavegation(): void {
  this.router.navigate(['/profile']);
}

historyNavegation(): void {
  this.router.navigate(['/history']);
}

homeNavegation() {
  this.router.navigate(['']);
}
}
