"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Pull!";
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Meo!";
    }
}
console.log(new Dog("Dog").sound());
console.log(new Cat("Cat").sound());
//# sourceMappingURL=Animal.js.map