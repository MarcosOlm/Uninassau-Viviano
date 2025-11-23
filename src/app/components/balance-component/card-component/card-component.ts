import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../services/card-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addBalanceCard } from '../../../interface/card';

@Component({
  selector: 'app-card-component',
  imports: [ReactiveFormsModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent implements OnInit{

  form!: FormGroup;
  id!: number;
  balance!: number;
  cardNumber!: number;
  cardType!: string;
  
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private cardService: CardService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') || '');
    this.getCardInformation();
    this.setupForm();
  }

  addValue(value: number) {
    const current = Number(this.form.get('Valor')?.value || 0);
    const newValue = current + value;
    this.form.get('Valor')?.setValue(newValue);
  }

  setupForm() {
    this.form = this.fb.group({
      Valor: ['', Validators.required]
    });
  }

  onSumit() {
    let cardInfo = this.form.value as addBalanceCard
    cardInfo = {...cardInfo, IdCard: this.id}
    if (this.form.valid) {
      this.cardService.alterBalanceCard(cardInfo).subscribe();
      this.router.navigate(['/']);
    }
  }

  getCardInformation() {
    this.cardService.searchCard(this.id).subscribe({
      next: (card) => {
        this.balance = card.Saldo;
        this.cardNumber = card.NumeroCard;
        this.cardType = card.Tipo;
      }
    });
  }

  homeNavegation() {
    this.router.navigate(['']);
  }
}
