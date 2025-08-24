"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Quạt đã được bật.");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Điều hòa đã được bật.");
    }
}
//test
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();
//# sourceMappingURL=Applicance.js.map