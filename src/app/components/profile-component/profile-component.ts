import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-profile-component',
  imports: [],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {

  constructor (private auth: AuthService) {}

  logoutUser() {
    this.auth.logout();
  }
}
