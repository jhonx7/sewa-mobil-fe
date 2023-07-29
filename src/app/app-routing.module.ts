import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeminjamanComponent } from './peminjaman/peminjaman.component';
import { PengembalianComponent } from './pengembalian/pengembalian.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { MobilkuComponent } from './mobilku/mobilku.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'mobilku',
    component: MobilkuComponent,
    canActivate: [authGuard]
  },
  {
    path: 'peminjaman',
    component: PeminjamanComponent,
    canActivate: [authGuard]
  },
  {
    path: 'pengembalian',
    component: PengembalianComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
