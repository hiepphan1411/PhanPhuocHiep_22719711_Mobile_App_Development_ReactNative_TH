"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
    }
    testSound() {
        this.makeSound();
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Go Go");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meoz meoz");
    }
}
//test
const dog = new Dog();
dog.makeSound();
const cat = new Cat();
cat.testSound();
//# sourceMappingURL=Animal.js.map