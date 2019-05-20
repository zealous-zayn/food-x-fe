import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
public baseUrl = "http://localhost:3000";

  constructor(public http : HttpClient) { 
    console.log("service called")
    
  }

  public getProduct = ()=>{
    const header = new HttpHeaders()
      .set('my-header', 'header')
      console.log(header)
    return this.http.post(`${this.baseUrl}/get-all-products`, null ,{headers:header})
  }

}
