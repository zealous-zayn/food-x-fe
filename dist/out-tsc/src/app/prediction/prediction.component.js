import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(appService, toastr) {
        this.appService = appService;
        this.toastr = toastr;
        this.products = [];
        this.order = [];
        this.totalValue = 0;
        this.predictionForm = new FormGroup({
            predictValue: new FormControl(),
            selectedProduct: new FormControl('Select Product')
        });
    }
    PredictionComponent.prototype.ngOnInit = function () {
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
    PredictionComponent.prototype.addPreduction = function () {
        var _this = this;
        if (this.predictionForm.value.predictValue === undefined || this.predictionForm.value.predictValue === null) {
            this.toastr.error("Please Select Product and Predict the value", "Warning");
        }
        else {
            var data = {
                productId: this.predictionForm.value.selectedProduct.id,
                predictedValue: this.predictionForm.value.predictValue
            };
            this.appService.addPredict(data).subscribe(function (response) {
                if (response.status == 200) {
                    _this.predictionForm.reset();
                    _this.toastr.success(response.message);
                }
                else {
                    _this.toastr.warning(response.message);
                }
            });
        }
    };
    PredictionComponent.prototype.reset = function () {
        this.predictionForm = new FormGroup({
            predictValue: new FormControl(),
            selectedProduct: new FormControl('Select Product')
        });
    };
    PredictionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-prediction',
            templateUrl: './prediction.component.html',
            styleUrls: ['./prediction.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AppService, ToastrService])
    ], PredictionComponent);
    return PredictionComponent;
}());
export { PredictionComponent };
//# sourceMappingURL=prediction.component.js.map