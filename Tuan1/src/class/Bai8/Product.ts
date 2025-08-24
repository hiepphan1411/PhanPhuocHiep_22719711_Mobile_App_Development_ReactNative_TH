//Create a Product class with name, price. Create an array of products and filter products with
// price > 100.

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

//test
const products: Product[] = [
    new Product("Product 1", 50),
    new Product("Product 2", 150),
    new Product("Product 3", 200),
];

const listProduct = products.filter(product => product.price > 100);
console.log(listProduct);
