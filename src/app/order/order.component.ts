import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products = ["a","b","c","d","e","f"]
  constructor() { }

  ngOnInit() {
  }

}
