import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PredictionComponent } from './prediction/prediction.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { KitchenScreenComponent } from './kitchen-screen/kitchen-screen.component';
>>>>>>> 73ab4905700460c1a235faae602212f8cf577c3e

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AddProductComponent,
    PredictionComponent,
    KitchenScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
>>>>>>> 73ab4905700460c1a235faae602212f8cf577c3e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
