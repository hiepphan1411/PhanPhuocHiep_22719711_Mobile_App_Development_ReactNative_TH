class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat meows");
    }
}

function demonstratePolymorphism(animal: Animal): void {
    animal.makeSound();
}

// Test
const dog = new Dog();
const cat = new Cat();

demonstratePolymorphism(dog);
demonstratePolymorphism(cat);
