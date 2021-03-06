import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'

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

  public addPredict(data):Observable<any>{
    const params = new HttpParams()
      .set('id', data.productId)
      .set('predictedValue', data.predictedValue)

     return this._http.put(`${this.baseUrl}/prdiction-update`, params)
  }

  public placeOrder(data): Observable<any>{
    const params = new HttpParams()
      .set('customerName', data.customerName)
      .set('orderDetails', JSON.stringify(data.orderDetails))

    return this._http.post(`${this.baseUrl}/create-order`, params)
  }

  public getOrders(): Observable<any>{
    return this._http.get(`${this.baseUrl}/get-orders`)
  }

  public doneOrder(data): Observable<any>{
    const params = new HttpParams()
      .set('orderId', data.orderId)
      .set('productId', data.productId)
      .set('quantity', data.quantity)

    return this._http.post(`${this.baseUrl}/done-product`, params)
  }

  public downloadFile(data): Observable<any>{
    const params = new HttpParams()
     .set('orderArr', JSON.stringify(data))

    


    return this._http.post(`${this.baseUrl}/download-file`, params,{responseType : 'blob'})
  }
}
