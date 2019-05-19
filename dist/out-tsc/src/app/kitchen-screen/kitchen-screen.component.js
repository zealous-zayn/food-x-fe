import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
var KitchenScreenComponent = /** @class */ (function () {
    function KitchenScreenComponent(appService, toastr) {
        this.appService = appService;
        this.toastr = toastr;
        this.allProducts = [];
        this.allOders = [];
    }
    KitchenScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getAllProduct().subscribe(function (response) {
            if (response.status == 200) {
                response.data.forEach(function (product) {
                    _this.allProducts.push(product);
                });
            }
            else {
                _this.toastr.error(response.message);
            }
        });
        this.appService.getOrders().subscribe(function (response) {
            if (response.status == 200) {
                response.data.forEach(function (order) {
                    _this.allOders.push(order);
                });
            }
            else {
                _this.toastr.error(response.message);
            }
        });
        console.log(this.allOders);
    };
    KitchenScreenComponent = tslib_1.__decorate([
        Component({
            selector: 'app-kitchen-screen',
            templateUrl: './kitchen-screen.component.html',
            styleUrls: ['./kitchen-screen.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppService, ToastrService])
    ], KitchenScreenComponent);
    return KitchenScreenComponent;
}());
export { KitchenScreenComponent };
//# sourceMappingURL=kitchen-screen.component.js.map