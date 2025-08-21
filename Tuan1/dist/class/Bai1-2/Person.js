"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
const person1 = new Person("Phan Hiệp", 20);
person1.displayInfo();
const student = new Student("Phan Phước Hiệp", 20, "18A");
student.displayInfo();
//# sourceMappingURL=Person.js.map