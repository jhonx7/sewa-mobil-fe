import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PengembalianService {

  private _url = 'http://localhost:8000/api/pengembalian/';
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post<any>(this._url, data);
  }
  read(id: number) {
    return this.http.get<any>(this._url + id);
  }
  readAll() {
    return this.http.get<any>(this._url);
  }
  update(id: number, data: any) {
    return this.http.patch<any>(this._url + id, data);
  }
  delete(id: number) {
    return this.http.delete<any>(this._url + id);
  }
}
