//Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi.`);
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        super.introduce();
        console.log(`Tôi dạy môn: ${this.subject}`);
    }
}
//test
const teacher = new Teacher("Nguyễn Văn Thắng", 30, "Lập trình di động mobile");
teacher.introduce();