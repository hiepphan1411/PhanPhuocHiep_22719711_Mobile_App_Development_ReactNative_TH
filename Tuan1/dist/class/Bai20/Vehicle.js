"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    start() {
        console.log("Car is starting");
    }
    stop() {
        console.log("Car is stopping");
    }
}
class Bike {
    start() {
        console.log("Bike is starting");
    }
    stop() {
        console.log("Bike is stopping");
    }
}
//test
const car = new Car();
car.start();
car.stop();
const bike = new Bike();
bike.start();
bike.stop();
//# sourceMappingURL=Vehicle.js.map