import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public productForm = new FormGroup({
    productName : new FormControl(''),
    productValue : new FormControl()
  })

  constructor(public appService : AppService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  public addProduct(){
    const data = {
      productName : this.productForm.value.productName,
      productValue : this.productForm.value.productValue
    }
    this.appService.addProduct(data).subscribe(
      (response)=>{
        console.log(response)
        if(response.status == 200){
        this.productForm.reset()
        this.toastr.success(response.message)
        } else {
          this.toastr.warning(response.message)
        }
      }
    )
  }
}
