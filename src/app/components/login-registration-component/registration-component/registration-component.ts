import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { userRegistration } from '../../../interface/user';
import { UserService } from '../../../services/user-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-registration-component',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.css',
})
export class RegistrationComponent implements OnInit{
  @Output() isLogin = new EventEmitter<boolean>();
  typeUser: String = '';
  form!: FormGroup;

  constructor (private fb: FormBuilder, private userService: UserService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.seputForm();
  }

  seputForm() {
    this.form = this.fb.group({
      Nome: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Matricula: ['', [Validators.required]],
      Senha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let newUserTemp = this.form.value as userRegistration;
      let newUser = {...newUserTemp, Tipo: this.typeUser, Status: "ATIVO"};
      this.userService.registration(newUser as userRegistration).subscribe({
        next: (res) => {
          this.auth.saveUser(res.Id);
          this.router.navigate(['/']);
        }
      });
    }
  }

  isLoginMode(): void {
    this.isLogin.emit(true);
  }

  typeUserReceive(user: String) {
    this.typeUser = user
  }
}
