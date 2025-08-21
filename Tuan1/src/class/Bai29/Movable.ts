interface Movable{
    move(): void;
}

class Car implements Movable {
    move(): void {
        console.log("The car is driving on the road");
    }
}

class Robot implements Movable {
    move(): void {
        console.log("The robot is walking forward");
    }
}

//test
const myCar = new Car();
const myRobot = new Robot();

myCar.move();
myRobot.move();