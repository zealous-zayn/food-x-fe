import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { initNgModule } from '@angular/core/src/view/ng_module';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-kitchen-screen',
  templateUrl: './kitchen-screen.component.html',
  styleUrls: ['./kitchen-screen.component.css']
})
export class KitchenScreenComponent implements OnInit {
  public allProducts = []
  public allOders = []
  public toggle = false
  constructor(public appService : AppService, public toastr : ToastrService, public socketService : SocketService) { }

  ngOnInit() {
    this.appService.getAllProduct().subscribe(
      (response)=>{
        if (response.status == 200){
          response.data.forEach(product => {
            this.allProducts.push(product)
          });
        } else{
          this.toastr.error(response.message)
        }
      }
    )

    this.getAllOrders()

    this.socketService.update().subscribe((data)=>{
      this.toastr.info(data)
      this.allOders = []
      this.getAllOrders()
    })
  }

  public notifyOrder = (data)=>{
    this.socketService.orderUpdate(data)
  }

  public getAllOrders(){
    this.appService.getOrders().subscribe(
      (response)=>{
        if (response.status == 200){
          response.data.forEach(order => {
            order.order_detials.forEach(item=>{
              this.allProducts.forEach(product=>{
                if(product.product_id === item.product_id){
                  this.allOders.push(
                    {
                      orderId : order.order_id,
                      productId: product.product_id,
                      product_name:product.product_name,
                      quantity:item.quantity,
                      createdTillNow:product.created_till_now,
                      status:item.status,
                      predicted : product.predicted
                    })
                }
              })
            })
          });
          this.toggle = true
        } else{
          this.toastr.error(response.message)
        }
      }
    )
  }

  public done(item){
    let data = {
      orderId : item.orderId,
      productId : item.productId,
      quantity : item.quantity
    }
    this.appService.doneOrder(data).subscribe(
      (response)=>{
        if(response.status ===200){
          this.toastr.success(response.message)
          item.status = true
          this.notifyOrder(response.message)
        } else {
          this.toastr.error(response.message)
        }
      }
    )
  }

}
