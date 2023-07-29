import { Component } from '@angular/core';
import { PengembalianService } from '../pengembalian.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pengembalian',
  templateUrl: './pengembalian.component.html',
  styleUrls: ['./pengembalian.component.css']
})
export class PengembalianComponent {
  data: any = [];
  error: string = '';
  search: string = '';
  nomor: string = '';

  constructor(
    private _pengembalian: PengembalianService,
    private _router: Router,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this._pengembalian.readAll().subscribe({
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

  closeAlert() {
		this.error = ''
	}
  formatDate(date : any){
    return new Date(date).toLocaleDateString();
  }
  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save(){
    this._pengembalian.create({nomor_plat:this.nomor}).subscribe({
      next : (res) => {
        console.log(res)
        this.modalService.dismissAll()
        window.location.reload()
      },
      error: (err) => {
        // console.log(err)
        // alert(err.error.message)
        this.error = err.error.message
      }
    })
  }
}
