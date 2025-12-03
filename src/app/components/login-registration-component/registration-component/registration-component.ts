import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { userRegistration } from '../../../interface/user';
import { UserService } from '../../../services/user-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { CommonModule } from '@angular/common';
import { OnlyNumbers } from '../../../directive/only-numbers';

@Component({
  selector: 'app-registration-component',
  imports: [ReactiveFormsModule, CommonModule, OnlyNumbers],
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
      Email: ['', [Validators.required, Validators.email]],
      Matricula: ['', [Validators.required, this.validatorMatricula]],
      Senha: ['', [Validators.required, this.ValidatorEspacialCharacters, Validators.minLength(6)]]
    });
  }

  ValidatorEspacialCharacters(input: FormControl) {
    return input.value.indexOf('!') == -1 
    && input.value.indexOf('@') == -1
    && input.value.indexOf('#') == -1
    && input.value.indexOf('$') == -1
    && input.value.length != 0
    && input.value.length >= 6
    ? {espacialCharacters: true} : null  
  }

  validatorMatricula(input: FormControl) {
    const value = (input.value ?? '').toString();
    if (value.length === 0) return null;
    return value.length !== 4 ? { matricula: true } : null;
  }

  onSubmit() {
    this.form.markAllAsTouched();
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
