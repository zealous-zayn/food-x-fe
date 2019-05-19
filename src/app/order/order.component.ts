import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import {SocketService} from '../socket.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products = []
  public order = []
  public orderConfirm = { order_id: "" }
  public message: string
  public totalValue = 0
  public orderForm = new FormGroup({
    customerName: new FormControl()
  })
  constructor(public appService: AppService, private toastr: ToastrService, public socketService : SocketService) { }

  ngOnInit() {
    this.appService.getAllProduct().subscribe(
      (response) => {
        if (response.status == 200) {
          response.data.forEach(product => {
            this.products.push(
              { 
                product_id: product.product_id, 
                product_name: product.product_name, 
                product_value: product.product_value, 
                quantity: 0, 
                status: false })
          });
        } else {
          this.toastr.error(response.message)
        }
      }
    )
  }

  public notifyOrder = (data)=>{
    this.socketService.orderUpdate(data)
  }

  public increase(i, product) {
    this.products[i].quantity++
    this.order.forEach((prod, index) => {
      if (prod.product_id == product.product_id) {
        this.order.splice(index, 1)
      }
    })
    this.order.push(product)
    this.totalValue = this.totalValue + product.product_value
  }

  public decrease(i, product) {
    this.products[i].quantity--
    this.order.forEach((prod, index) => {
      if (prod.product_id == product.product_id) {
        this.order.splice(index, 1)
      }
    })
    this.totalValue = this.totalValue - product.product_value
  }

  public confirm() {
    if (this.order.length === 0) {
      this.toastr.warning("Please Make Some Order", "warning")
    } else {
      const data = {
        customerName: this.orderForm.value.customerName,
        orderDetails: this.order
      }
      this.appService.placeOrder(data).subscribe(
        (response) => {
          if (response.status === 200) {
            this.orderConfirm = response.data
            this.message = response.message + " " + `Your Order Id is`
            this.reset()
            this.notifyOrder(response.message)
          } else {
            this.message = response.message
          }
        }
      )
    }
  }

  public reset() {
    this.orderForm.reset()
    this.products.forEach(prod => {
      prod.quantity = 0
    })
    this.order = []
    this.totalValue = 0
  }

}
