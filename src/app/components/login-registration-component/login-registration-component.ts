import { Component } from '@angular/core';
import { LoginComponent } from "./login-component/login-component";
import { RegistrationComponent } from "./registration-component/registration-component";

@Component({
  selector: 'app-login-registration-component',
  imports: [LoginComponent, RegistrationComponent],
  templateUrl: './login-registration-component.html',
  styleUrl: './login-registration-component.css',
})
export class LoginRegistrationComponent {
  isLogin: boolean = true

  isLoginModeReceive(event: boolean) {
    this.isLogin = event
  }
}
