"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Manager extends Employee {
    department;
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    getDetails() {
        return `Quản lý: ${this.name}, Tuổi: ${this.age}, Phòng ban: ${this.department}`;
    }
}
class Developer extends Employee {
    programmingLanguage;
    constructor(name, age, programmingLanguage) {
        super(name, age);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `Nhà phát triển: ${this.name}, Tuổi: ${this.age}, Ngôn ngữ: ${this.programmingLanguage}`;
    }
}
// Test
const manager = new Manager("PPH", 30, "Sales");
console.log(manager.getDetails());
const developer = new Developer("Phan Hiệp", 20, "TypeScript");
console.log(developer.getDetails());
//# sourceMappingURL=Employee.js.map