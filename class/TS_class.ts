//Classes
class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public stock: number
    ) {}

    // Method to reduce stock
    public reduceStock(quantity: number): void {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log(`Not enough stock for ${this.name}`);
        }
    }
}

class Cart {
    private items: { product: Product; quantity: number }[] = [];

    // Add product to cart
    public addToCart(product: Product, quantity: number): void {
        product.reduceStock(quantity);
        this.items.push({ product, quantity });
        console.log(`${quantity} of ${product.name} added to cart.`);
    }

    // Calculate total price of cart items
    public calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

const laptop = new Product(1, "Laptop", 1000, 10);
const phone = new Product(2, "Phone", 500, 20);

const cart = new Cart();
cart.addToCart(laptop, 1);
cart.addToCart(phone, 2);

console.log(`Total cart price: $${cart.calculateTotal()}`);
// Output: Total cart price: $2000


export{}