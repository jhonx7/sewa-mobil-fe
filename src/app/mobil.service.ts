import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobilService {
  private _url = 'http://localhost:8000/api/mobil/';
  private _myCarUrl = 'http://localhost:8000/api/mobilku/';
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post<any>(this._url, data);
  }
  read(id: number) {
    return this.http.get<any>(this._url + id);
  }
  readAll(search: string, mulai: string, selesai: string) {
    let params = {
      search: search,
      mulai: mulai,
      selesai: selesai,
    };
    return this.http.get<any>(this._url, {
      params,
    });
  }
  readByUser() {
    return this.http.get<any>(this._myCarUrl);
  }
  update(id: number, data: any) {
    return this.http.patch<any>(this._url + id, data);
  }
  delete(id: number) {
    return this.http.delete<any>(this._url + id);
  }
}
