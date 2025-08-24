class Order {
    private products: { name: string; price: number }[] = [];

    addProduct(name: string, price: number): void {
        this.products.push({ name, price });
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

//test
const order = new Order();
order.addProduct("Sản phẩm 1", 100);
order.addProduct("Sản phẩm 2", 200);
console.log("Tổng giá trị đơn hàng:", order.calculateTotal());