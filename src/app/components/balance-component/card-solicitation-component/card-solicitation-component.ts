import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { creatCard } from '../../../interface/card';
import { CardService } from '../../../services/card-service';
import { AuthService } from '../../../services/auth-service';
import { BalanceService } from '../../../services/balance-service';

@Component({
  selector: 'app-card-solicitation-component',
  imports: [ReactiveFormsModule],
  templateUrl: './card-solicitation-component.html',
  styleUrl: './card-solicitation-component.css',
})
export class CardSolicitationComponent implements OnInit{

  form!: FormGroup;
  nome!: string;
  balance: number = 0;
  type: string = 'Comum';

  constructor(private router: Router, 
    private fb: FormBuilder, 
    private newCard: CardService, 
    private auth: AuthService,
    private user: BalanceService) {}

  ngOnInit(): void {
    this.setupForm();
    this.getName();
  }

  homeNavegation() {
    this.router.navigate(['']);
  }

  setupForm() {
    this.form = this.fb.group({
      Tipo: ['Comum', Validators.required],
      ValorInicial: ['', Validators.required]
    })
  }

  onSumbit() {
    let card = this.form.value as creatCard
    const userId = this.auth.getUserId();
    card = {...card, IdUsuario: userId}
    if (this.form.valid) {
      this.newCard.creatCards(card).subscribe();
      this.router.navigate(['/']);
    }
  }

  addValue(value: number) {
    const current = Number(this.form.get('ValorInicial')?.value || 0);
    const newValue = current + value;
    this.balance = newValue;
    this.form.get('ValorInicial')?.setValue(newValue);
  }

  getName(): void {
    this.user.searchUser().subscribe((user) => this.nome = user.Nome);
  }
  
  alterType(type: string) {
    this.type = type;
  }

}
