import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(appService, toastr) {
        this.appService = appService;
        this.toastr = toastr;
        this.productForm = new FormGroup({
            productName: new FormControl(''),
            productValue: new FormControl()
        });
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.productForm.value.productValue === undefined || this.productForm.value.productValue === null) {
            this.toastr.error("Please Add Product and the value", "Warning");
        }
        else {
            var data = {
                productName: this.productForm.value.productName,
                productValue: this.productForm.value.productValue
            };
            this.appService.addProduct(data).subscribe(function (response) {
                if (response.status == 200) {
                    _this.productForm.reset();
                    _this.toastr.success(response.message);
                }
                else {
                    _this.toastr.warning(response.message);
                }
            });
        }
    };
    AddProductComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppService, ToastrService])
    ], AddProductComponent);
    return AddProductComponent;
}());
export { AddProductComponent };
//# sourceMappingURL=add-product.component.js.map