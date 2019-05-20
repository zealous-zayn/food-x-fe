import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public baseUrl = 'http://localhost:3000'
  public socket 
  constructor() {
    this.socket = io(this.baseUrl)
   }

   public verifyUser = ()=>{
    return Observable.create((observer)=>{
      this.socket.on('connected', (data)=>{
        console.log(data)
      })
    })
  }

  public orderUpdate =(data)=>{
    this.socket.emit('order', data)
  }

  public update = ()=>{
    return Observable.create((observer)=>{
      this.socket.on('update', (data)=>{
        observer.next(data)
      })
    })
  }
}
