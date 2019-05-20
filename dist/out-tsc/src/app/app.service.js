import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:3000';
    }
    AppService.prototype.addProduct = function (data) {
        var params = new HttpParams()
            .set('productName', data.productName)
            .set('productValue', data.productValue);
        return this._http.post(this.baseUrl + "/add-product", params);
    };
    AppService.prototype.getAllProduct = function () {
        return this._http.get(this.baseUrl + "/get-all-products");
    };
    AppService.prototype.addPredict = function (data) {
        var params = new HttpParams()
            .set('id', data.productId)
            .set('predictedValue', data.predictedValue);
        return this._http.put(this.baseUrl + "/prdiction-update", params);
    };
    AppService.prototype.placeOrder = function (data) {
        var params = new HttpParams()
            .set('customerName', data.customerName)
            .set('orderDetails', JSON.stringify(data.orderDetails));
        return this._http.post(this.baseUrl + "/create-order", params);
    };
    AppService.prototype.getOrders = function () {
        return this._http.get(this.baseUrl + "/get-orders");
    };
    AppService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map