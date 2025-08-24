abstract class Appliance {
    abstract turnOn(): void;
}

class Fan extends Appliance {
    turnOn(): void {
        console.log("Quạt đã được bật.");
    }
}

class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Điều hòa đã được bật.");
    }
}

//test
const fan = new Fan();
fan.turnOn();

const airConditioner = new AirConditioner();
airConditioner.turnOn();
