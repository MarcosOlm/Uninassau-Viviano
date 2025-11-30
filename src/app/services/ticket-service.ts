import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { allTicketResponse, currentTicketResponse, ticketGenereteResponse, ticketPayment, ticketPaymentResponse, ticketVerification, ticketVerificationResponse } from '../interface/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
 
  private url = 'http://localhost:3000';

  constructor (private http: HttpClient) {}

  ticketGenerete(user: number | null): Observable<ticketGenereteResponse>{
    return this.http.get<ticketGenereteResponse>(`${this.url}/addticketuser/${user}`);
  }

  currentTicketByUser(user: number | null): Observable<currentTicketResponse> {
    return this.http.get<currentTicketResponse>(`${this.url}/capticketid/${user}`);
  }

  allticketByUser(user: number | null): Observable<allTicketResponse> {
    return this.http.get<allTicketResponse>(`${this.url}/capticketuser/${user}`);
  }

  ticketVerification(ticketCode: ticketVerification | null): Observable<ticketVerificationResponse> {
    return this.http.post<ticketVerificationResponse>(`${this.url}/valorticket`, ticketCode);
  }

  ticketPayment(paymentMethod: ticketPayment): Observable<ticketPaymentResponse> {
    return this.http.post<ticketPaymentResponse>(`${this.url}/pagarticket`, paymentMethod);
  }
}
