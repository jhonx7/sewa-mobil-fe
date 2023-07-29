import { Component } from '@angular/core';
import { PeminjamanService } from '../peminjaman.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.css'],
})
export class PeminjamanComponent {
  data: any = [];
  search: string = '';
  mulai: string = '';
  selesai: string = '';
  constructor(
    private _peminjaman: PeminjamanService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._peminjaman.readAll().subscribe({
      next: (res) => {
        // console.log(res)
        this.data = res.data;
      },
      error: (err) => {
        console.error(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            this._router.navigate(['/login']);
          }
        }
      },
    });
  }
  formatDate(date : any){
    return new Date(date).toLocaleDateString();
  }
}
