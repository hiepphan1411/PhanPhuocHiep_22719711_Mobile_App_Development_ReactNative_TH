abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    constructor(private side: number){
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(private radius: number){
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

//test
const square = new Square(4);
console.log(`Diện tích hình vuông: ${square.area()}`);

const circle = new Circle(3);
console.log(`Diện tích hình tròn: ${circle.area()}`);
