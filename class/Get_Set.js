"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(price) {
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newPrice) {
            if (newPrice > 0) {
                this._price = newPrice;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product1 = new Product(50);
console.log(product1.price); // Output: 50
product1.price = 100;
console.log(product1.price); // Output: 100
