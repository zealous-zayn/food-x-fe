import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseUrl = 'http://localhost:3000'
  constructor(public _http : HttpClient) { }

  public addProduct(data): Observable<any>{
    const params = new HttpParams()
        .set('productName', data.productName)
        .set('productValue', data.productValue)

      return this._http.post(`${this.baseUrl}/add-product`, params)
  }

  public getAllProduct(): Observable<any>{
    return this._http.get(`${this.baseUrl}/get-all-products`)
  }
}
