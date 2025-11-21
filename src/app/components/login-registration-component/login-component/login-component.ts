import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { userLogin } from '../../../interface/user';
import { UserService } from '../../../services/user-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit{
  @Output() isLogin = new EventEmitter<boolean>();
  form!: FormGroup;

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
      this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      Matricula: [''],
      Senha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let newUserLoin: userLogin = this.form.value as userLogin;
      this.userService.login(newUserLoin).subscribe({
        next: (res) => {
          if (res.Liberacao) {
            this.auth.saveUser(res.Id);
            this.router.navigate(['/']);
          }
        }
      });
    }
  }

  isLoginMode(): void {
    this.isLogin.emit(false)
  }
}
