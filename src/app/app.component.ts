import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sewa Mobil';
  constructor(private _auth: AuthService, private _router : Router) {}

  isLoggedIn() {
    return this._auth.isLoggedIn();
  }

  logout() {
    return this._auth.logout();
  }
}
