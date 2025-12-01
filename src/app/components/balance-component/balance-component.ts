import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from '../../services/balance-service';
import { CarouselComponent } from "./carousel-component/carousel-component";

@Component({
  selector: 'app-balance-component',
  imports: [CarouselComponent],
  templateUrl: './balance-component.html',
  styleUrl: './balance-component.css' 
})
export class BalanceComponent implements OnInit{
visible = false;
nome!: string;
balance!: number;

constructor(private router: Router, private user: BalanceService) {}

  ngOnInit(): void {
    this.getName();
    this.getBalance();
  }

visibleBalance() {
  if(this.visible === true){
    this.visible = false
  } else {
    this.visible = true
  }
}

getName(): void {
  this.user.searchUser().subscribe((user) => this.nome = user.Nome);
}

getBalance(): void {
  this.user.searchBalance().subscribe((user) => this.balance = user.Saldo);
}
}