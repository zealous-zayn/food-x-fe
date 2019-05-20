import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PredictionComponent } from './prediction/prediction.component';
import { KitchenScreenComponent } from './kitchen-screen/kitchen-screen.component';
var routes = [
    { path: "create-order", component: OrderComponent, pathMatch: 'full' },
    { path: '', redirectTo: "create-order", pathMatch: 'full' },
    { path: "add-product", component: AddProductComponent, pathMatch: 'full' },
    { path: "predict", component: PredictionComponent, pathMatch: 'full' },
    { path: "kitchen-screen", component: KitchenScreenComponent, pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map