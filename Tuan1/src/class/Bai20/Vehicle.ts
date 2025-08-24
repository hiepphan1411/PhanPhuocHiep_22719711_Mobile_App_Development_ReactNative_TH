interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car is starting");
    }

    stop(): void {
        console.log("Car is stopping");
    }
}

class Bike implements Vehicle {
    start(): void {
        console.log("Bike is starting");
    }

    stop(): void {
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
