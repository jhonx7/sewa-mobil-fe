import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PeminjamanComponent } from './peminjaman/peminjaman.component';
import { PengembalianComponent } from './pengembalian/pengembalian.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { MobilService } from './mobil.service';
import { PeminjamanService } from './peminjaman.service';
import { PengembalianService } from './pengembalian.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { NgbAlertModule, NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobilkuComponent } from './mobilku/mobilku.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PeminjamanComponent,
    PengembalianComponent,
    HomeComponent,
    MobilkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepicker,
    NgbAlertModule
  ],
  providers: [
    AuthService,
    MobilService,
    PeminjamanService,
    PengembalianService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
