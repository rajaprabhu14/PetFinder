import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  displayError = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    sessionStorage.setItem('loggedInUser', '');
    this.loginForm = new FormBuilder().group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
}
