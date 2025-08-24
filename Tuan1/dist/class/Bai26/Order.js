"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    products = [];
    addProduct(name, price) {
        this.products.push({ name, price });
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
//test
const order = new Order();
order.addProduct("Sản phẩm 1", 100);
order.addProduct("Sản phẩm 2", 200);
console.log("Tổng giá trị đơn hàng:", order.calculateTotal());
//# sourceMappingURL=Order.js.map