import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  displayError = false;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const login = {
      "UserName": this.loginForm.get("userName")?.value,
      "Password": this.loginForm.get("password")?.value
    }

    this.formSubmitted = true;

    if (this.loginForm.valid) {

      this.loginService.getLogin(login).subscribe((response) => {
        sessionStorage.setItem('loggedInUser', response.result);
        this.router.navigate(['./pets']);
      });
    }
  }
}
