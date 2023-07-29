import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}
  loginUser(): void {
    this._auth.login(this.data).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        this._router.navigate(['/home'])
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
