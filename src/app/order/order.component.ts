import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products : String;


  constructor(public appService : AppService) { }

  ngOnInit() {
    this.appService.getProduct().subscribe(
      (resposnse)=>{
        console.log(resposnse)
        this.products = resposnse['data'];
      }
    )
  }

}
