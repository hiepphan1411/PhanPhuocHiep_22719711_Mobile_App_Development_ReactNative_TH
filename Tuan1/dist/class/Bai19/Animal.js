"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}
function demonstratePolymorphism(animal) {
    animal.makeSound();
}
// Test
const dog = new Dog();
const cat = new Cat();
demonstratePolymorphism(dog);
demonstratePolymorphism(cat);
//# sourceMappingURL=Animal.js.map