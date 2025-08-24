"use strict";
//Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
//test
const products = [
    new Product("Product 1", 50),
    new Product("Product 2", 150),
    new Product("Product 3", 200),
];
const listProduct = products.filter(product => product.price > 100);
console.log(listProduct);
//# sourceMappingURL=Product.js.map