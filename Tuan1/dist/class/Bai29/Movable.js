"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    move() {
        console.log("The car is driving on the road");
    }
}
class Robot {
    move() {
        console.log("The robot is walking forward");
    }
}
//test
const myCar = new Car();
const myRobot = new Robot();
myCar.move();
myRobot.move();
//# sourceMappingURL=Movable.js.map