import { Component, OnInit } from '@angular/core';
import { MobilService } from '../mobil.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeminjamanService } from '../peminjaman.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: any = [];
  error: string = '';
  search: string = '';
  mulai: string = '';
  selesai: string = '';
  item: any = {};

  constructor(
    private _auth: AuthService,
    private _mobil: MobilService,
    private _sewa: PeminjamanService,
    private _router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._mobil.readAll(this.search, this.mulai, this.selesai).subscribe({
      next: (res) => (this.data = res.data),
      error: (e) => console.error(e),
    });
  }
  closeAlert() {
    this.error = '';
  }
  openModal(content: any, item: any) {
    if (!this._auth.isLoggedIn()) {
      this._router.navigate(['/login']);
      return
    }
    this.item = item;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    let data = {
      tgl_mulai: this.mulai,
      tgl_selesai: this.selesai,
      mobil_id: this.item.id,
    };
    // console.log(data)
    this._sewa.create(data).subscribe({
      next: (res) => {
        // console.log(res);
        this.modalService.dismissAll();
        this._router.navigate(['/peminjaman']);
      },
      error: (err) => {
        console.error(err);
        this.error = err.error.message
      },
    });
  }
}
