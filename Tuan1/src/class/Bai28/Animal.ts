class Animal {
    protected makeSound(): void {
    }
    public testSound(): void {
        this.makeSound();
    }
}
class Dog extends Animal {
    protected makeSound(): void {
        console.log ("Go Go")
    }
}
class Cat extends Animal {
    protected makeSound(): void{
        console.log("Meoz meoz");
    }
}
//test
const dog = new Dog();
dog.testSound();

const cat = new Cat();
cat.testSound();