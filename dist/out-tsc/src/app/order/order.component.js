import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(appService, toastr) {
        this.appService = appService;
        this.toastr = toastr;
        this.products = [];
        this.order = [];
        this.orderConfirm = { order_id: "" };
        this.totalValue = 0;
        this.orderForm = new FormGroup({
            customerName: new FormControl()
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getAllProduct().subscribe(function (response) {
            if (response.status == 200) {
                response.data.forEach(function (product) {
                    _this.products.push({ id: product.product_id, product_name: product.product_name, product_value: product.product_value, quantity: 0 });
                });
            }
            else {
                _this.toastr.error(response.message);
            }
        });
    };
    OrderComponent.prototype.increase = function (i, product) {
        var _this = this;
        this.products[i].quantity++;
        this.order.forEach(function (prod, index) {
            if (prod.id == product.id) {
                _this.order.splice(index, 1);
            }
        });
        this.order.push(product);
        this.totalValue = this.totalValue + product.product_value;
    };
    OrderComponent.prototype.decrease = function (i, product) {
        var _this = this;
        this.products[i].quantity--;
        this.order.forEach(function (prod, index) {
            if (prod.id == product.id) {
                _this.order.splice(index, 1);
            }
        });
        this.totalValue = this.totalValue - product.product_value;
    };
    OrderComponent.prototype.confirm = function () {
        var _this = this;
        if (this.order.length === 0) {
            this.toastr.warning("Please Make Some Order", "warning");
        }
        else {
            var data = {
                customerName: this.orderForm.value.customerName,
                orderDetails: this.order
            };
            this.appService.placeOrder(data).subscribe(function (response) {
                if (response.status === 200) {
                    _this.orderConfirm = response.data;
                    _this.message = response.message + " " + "Your Order Id is";
                    _this.reset();
                    _this.childModal.hide();
                }
                else {
                    _this.message = response.message;
                }
            });
        }
    };
    OrderComponent.prototype.reset = function () {
        this.orderForm.reset();
        this.products.forEach(function (prod) {
            prod.quantity = 0;
        });
        this.order = [];
        this.totalValue = 0;
    };
    OrderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppService, ToastrService])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map