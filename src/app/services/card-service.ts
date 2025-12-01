import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addBalanceCard, card, cardById, creatCard, historyCardResponse, historyCardTransactionsReponse } from '../interface/card';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  
  constructor(private http: HttpClient, private auth: AuthService) {}

  private url = 'http://localhost:3000';
  

  searchAllCards(): Observable<card> {
    const id = this.auth.getUserId();
    return this.http.get<card>(`${this.url}/cartoes/${id}`);
  }

  searchCard(cardId: number): Observable<cardById> {
    return this.http.get<cardById>(`${this.url}/cartao/${cardId}`);
  }

  creatCards(newCard: creatCard): Observable<creatCard> {
    return this.http.post<creatCard>(`${this.url}/addscartao`, newCard);
  }

  alterBalanceCard(carInfo: addBalanceCard): Observable<addBalanceCard> {
    return this.http.put<addBalanceCard>(`${this.url}/addsaldocartao`, carInfo);
  }

  historyCard(user: number | null): Observable<historyCardResponse> {
    return this.http.get<historyCardResponse>(`${this.url}/buscarregistrouser/${user}`)
  }
  historyRecentCard(card: number | null): Observable<historyCardTransactionsReponse> {
    return this.http.get<historyCardTransactionsReponse>(`${this.url}/buscarregistrocard/${card}`);
  }
}
