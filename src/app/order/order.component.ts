import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products =[]
  public order = []
  public totalValue = 0
  public orderForm = new FormGroup({
    customerName : new FormControl()
  })
  constructor(public appService : AppService, private toastr: ToastrService) { }

  ngOnInit() {
    this.appService.getAllProduct().subscribe(
      (response)=>{
        if (response.status == 200){
          response.data.forEach(product => {
            this.products.push({id: product.product_id, product_name: product.product_name, product_value: product.product_value ,quantity: 0})
          });
        } else{
          this.toastr.error(response.message)
        }
      }
    )
  }

  public increase(i, product){
    this.products[i].quantity++
    this.order.forEach((prod, index)=>{
      if(prod.id == product.id){
        this.order.splice(index, 1)
      }
  })
    this.order.push(product)
    this.totalValue = this.totalValue+product.product_value
  }

  public decrease(i, product){
    this.products[i].quantity--
    this.order.forEach((prod, index)=>{
        if(prod.id == product.id){
          this.order.splice(index, 1)
        }
    })
    this.totalValue = this.totalValue-product.product_value
  }

  public confirm(){
    this.order.forEach((product, index)=>{
      
    })
  }

}
