import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-component',
  imports: [],
  templateUrl: './balance-component.html',
  styleUrl: './balance-component.css'
})
export class BalanceComponent {
visible = false;
invisible = false;

constructor(private router: Router) {}

visibleBalance() {
  if(this.visible === true){
    this.visible = false
  } else {
    this.visible = true
  }
}

invisibleBalance() {
  if(this.invisible === true){
    this.invisible = false
  } else {
    this.invisible = true
  }
}

cardNavegation() {
  this.router.navigate(['/card']);
}

pulsCardNavegation() {
  this.router.navigate(['/plus-card']);
}
}