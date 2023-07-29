import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = 'http://localhost:8000/api/login';
  private _logoutUrl = 'http://localhost:8000/api/logout';
  private _registerUrl = 'http://localhost:8000/api/register';
  constructor(private http: HttpClient, private _router : Router) {}

  login(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  logout() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
  register(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
