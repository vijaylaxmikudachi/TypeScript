"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes
var Product = /** @class */ (function () {
    function Product(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    // Method to reduce stock
    Product.prototype.reduceStock = function (quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
        else {
            console.log("Not enough stock for ".concat(this.name));
        }
    };
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    // Add product to cart
    Cart.prototype.addToCart = function (product, quantity) {
        product.reduceStock(quantity);
        this.items.push({ product: product, quantity: quantity });
        console.log("".concat(quantity, " of ").concat(product.name, " added to cart."));
    };
    // Calculate total price of cart items
    Cart.prototype.calculateTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    return Cart;
}());
var laptop = new Product(1, "Laptop", 1000, 10);
var phone = new Product(2, "Phone", 500, 20);
var cart = new Cart();
cart.addToCart(laptop, 1);
cart.addToCart(phone, 2);
console.log("Total cart price: $".concat(cart.calculateTotal()));
