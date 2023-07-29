import { Component } from '@angular/core';
import { MobilService } from '../mobil.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mobilku',
  templateUrl: './mobilku.component.html',
  styleUrls: ['./mobilku.component.css']
})
export class MobilkuComponent {
  data: any = [];
  newcar: any = {
    merek : '',
    model : '',
    nomor_plat : '',
    tarif : '',
  };
  error: string = '';
  search: string = '';
  nomor: string = '';

  constructor(
    private _mobil: MobilService,
    private _router: Router,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this._mobil.readByUser().subscribe({
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

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  delete(id : any){
    this._mobil.delete(id).subscribe({
      next : (res) => {
        console.log(res)
        window.location.reload()
      },
      error: (err) => {
        // console.log(err)
        alert(err.error.message)
        // this.error = err.error.message
      }
    })
  }
  save(){
    this._mobil.create(this.newcar).subscribe({
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
