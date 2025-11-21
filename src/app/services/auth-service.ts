import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { Router } from '@angular/router';

interface tokenData {
  token: string,
  id: number
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor (private storageService: StorageService, private route: Router) {}

  saveUser(id: number) {
    const tokenData: tokenData = {
      token: crypto.randomUUID(),
      id: id
    }

    this.storageService.set('auth', tokenData);
  }

  logout(): void {
    this.storageService.remove('auth');
    this.route.navigate(['/login-registration']);

  }

  getToken(): string | null {
    const auth = this.storageService.get<tokenData>('auth');
    return auth ? auth.token : null;
  }

  isValidToken(): boolean {
    const auth = this.storageService.get<tokenData>('auth');
    if (!auth){
      return false;
    }

    return true;
  }
}
