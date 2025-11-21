import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { userRegistration, userLogin, userLoginResponse, userRegistrationResponse } from '../interface/user';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  registration(user: userRegistration): Observable<userRegistrationResponse> {
    return this.http.post<userRegistrationResponse>(`${this.url}/cadastro`, user);
  }

  login(user: userLogin): Observable<userLoginResponse> {
    return this.http.post<userLoginResponse>(`${this.url}/login`, user);
  }
}
