import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../services/card-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addBalanceCard, historyCard } from '../../../interface/card';

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
  cardNumber!: string;
  cardType!: string;
  historyCard: boolean = true;
  historyTransactions: historyCard[] = [];
  
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private cardService: CardService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') || '');
    this.getCardInformation();
    this.setupForm();
    this.getHistoryCard();
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
        this.alterCardNumber(card.NumeroCard);
        this.cardType = card.Tipo;
      }
    });
  }

  homeNavegation() {
    this.router.navigate(['']);
  }

  alterCardNumber(cardNumber: number) {
    this.cardNumber = cardNumber.toString().replace(/(.{4})/g, '$1 ').trim();
  }

  getHistoryCard() {
    this.cardService.historyRecentCard(this.id).subscribe({
      next: (res) => {
        if (res.Sucesso && res.Registros[0] != null) {
          this.historyTransactions = res.Registros;
        }
        else {
          console.log(res.Resposta);
        }
        if (res.Registros[0] == null) {
          this.historyCard = false;
        }
      }
    })
  }
}
