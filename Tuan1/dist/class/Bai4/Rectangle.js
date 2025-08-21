"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(10, 10);
console.log("Diện tích: ", rectangle.calculateArea());
console.log("Chu vi: ", rectangle.calculatePerimeter());
//# sourceMappingURL=Rectangle.js.map