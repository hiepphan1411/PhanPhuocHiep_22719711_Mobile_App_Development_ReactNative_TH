class Rectangle {
    width: number;
    height: number;

    constructor (width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }

}

const rectangle = new Rectangle(10, 10);
console.log("Diện tích: ", rectangle.calculateArea());
console.log("Chu vi: ", rectangle.calculatePerimeter());