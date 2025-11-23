import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user, userBalance } from '../interface/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient, private auth: AuthService) {}

  searchUser(): Observable<user> {
    const id = this.auth.getUserId();
    return this.http.get<user>(`${this.url}/buscarporid/${id}`);
  }

  searchBalance(): Observable<userBalance> {
    const id = this.auth.getUserId();
    return this.http.get<userBalance>(`${this.url}/saldocarteira/${id}`);
  }
}
