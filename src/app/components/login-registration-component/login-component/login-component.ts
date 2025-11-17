import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  @Output() isLogin = new EventEmitter<boolean>();

  isLoginMode(): void {
    this.isLogin.emit(false)
  }
}
