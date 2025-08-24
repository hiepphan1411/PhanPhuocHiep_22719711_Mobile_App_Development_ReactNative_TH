abstract class Employee {
    constructor(protected name: string, protected age: number) {}

    abstract getDetails(): string;
}

class Manager extends Employee {
    constructor(name: string, age: number, private department: string) {
        super(name, age);
    }

    getDetails(): string {
        return `Quản lý: ${this.name}, Tuổi: ${this.age}, Phòng ban: ${this.department}`;
    }
}

class Developer extends Employee {
    constructor(name: string, age: number, private programmingLanguage: string) {
        super(name, age);
    }

    getDetails(): string {
        return `Nhà phát triển: ${this.name}, Tuổi: ${this.age}, Ngôn ngữ: ${this.programmingLanguage}`;
    }
}
// Test
const manager = new Manager("PPH", 30, "Sales");
console.log(manager.getDetails());

const developer = new Developer("Phan Hiệp", 20, "TypeScript");
console.log(developer.getDetails());
