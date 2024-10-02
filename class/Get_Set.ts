class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice > 0) {
            this._price = newPrice;
        }
    }
}

const product1 = new Product(50);
console.log(product1.price);  // Output: 50
product1.price = 100;
console.log(product1.price);  // Output: 100


export{}