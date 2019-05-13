import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PredictionComponent } from './prediction/prediction.component';

const routes: Routes = [
  {path:"create-order", component: OrderComponent, pathMatch:'full'},
  {path:'', redirectTo:"create-order", pathMatch:'full'},
  {path:"add-product", component:AddProductComponent, pathMatch:'full'},
  {path:"predict", component:PredictionComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
