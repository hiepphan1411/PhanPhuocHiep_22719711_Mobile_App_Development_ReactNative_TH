class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}

const person1 = new Person("Phan Hiệp", 20);
person1.displayInfo();

const student = new Student("Phan Phước Hiệp", 20, "18A");
student.displayInfo();