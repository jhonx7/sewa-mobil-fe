import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  data = {
    name: '',
    phone: '',
    address: '',
    license: '',
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private _router: Router) {}
  registerUser(): void {
    this._auth.register(this.data).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        this._router.navigate(['/home']);
      },
      error: (e) => {
        console.error(e.error);
        alert(e.error.message)
      },
      complete: () => console.info('complete'),
    });
  }
}
