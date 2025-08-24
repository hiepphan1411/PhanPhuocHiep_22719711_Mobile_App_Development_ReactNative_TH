"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi.`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        super.introduce();
        console.log(`Tôi dạy môn: ${this.subject}`);
    }
}
//test
const teacher = new Teacher("Nguyễn Văn Thắng", 30, "Lập trình di động mobile");
teacher.introduce();
//# sourceMappingURL=Teacher.js.map