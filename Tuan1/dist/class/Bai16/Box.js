"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
//test
const box1 = new Box("Hello Phan Phuoc Hiep");
console.log(box1.getValue());
//# sourceMappingURL=Box.js.map