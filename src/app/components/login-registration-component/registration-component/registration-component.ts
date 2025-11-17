import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration-component',
  imports: [],
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.css',
})
export class RegistrationComponent {
  @Output() isLogin = new EventEmitter<boolean>();
  typeUser: String = '';

  isLoginMode(): void {
    this.isLogin.emit(true);
  }

  typeUserReceive(user: String) {
    this.typeUser = user
  }
}
