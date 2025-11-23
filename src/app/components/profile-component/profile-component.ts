import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { BalanceService } from '../../services/balance-service';

@Component({
  selector: 'app-profile-component',
  imports: [],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {

  nome!: string;
  email!: string;
  matricula!: string;

  constructor (private auth: AuthService, private user: BalanceService) {
    this.getName();
    this.getEmail();
    this.getMatriculation();
  }

  getName(): void {
    this.user.searchUser().subscribe((user) => this.nome = user.Nome);
  }

  getEmail(): void {
    this.user.searchUser().subscribe((user) => this.email = user.Email);
  }

  getMatriculation(): void {
    this.user.searchUser().subscribe((user) => this.matricula = user.Matricula);
  }

  logoutUser() {
    this.auth.logout();
  }
}
