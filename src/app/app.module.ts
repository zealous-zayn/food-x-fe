import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AddProductComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
