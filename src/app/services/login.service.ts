import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Envoirnment } from '../config/config';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
  
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  getLogin(loginRequest: any): Observable<Login> {
    sessionStorage.clear();
    return this.httpClient
      .post<Login>(Envoirnment.login_url, loginRequest)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
