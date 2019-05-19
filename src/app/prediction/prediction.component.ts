import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  public products =[]
  public order = []
  public totalValue = 0
  public predictionForm = new FormGroup({
    predictValue : new FormControl(),
    selectedProduct : new FormControl('Select Product')
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

  public addPreduction(){
    if(this.predictionForm.value.predictValue === undefined || this.predictionForm.value.predictValue ===null){
      this.toastr.error("Please Select Product and Predict the value","Warning")
    } else {
    const data = {
      productId : this.predictionForm.value.selectedProduct.id,
      predictedValue : this.predictionForm.value.predictValue
    }
    this.appService.addPredict(data).subscribe(
      (response)=>{
        if(response.status == 200){
          this.predictionForm.reset()
          this.toastr.success(response.message)
          } else {
            this.toastr.warning(response.message)
          }
      }
    )
    }
  }

  public reset(){
    this.predictionForm = new FormGroup({
      predictValue : new FormControl(),
      selectedProduct : new FormControl('Select Product')
    })
  }
}
