"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getInfo() {
        return `Student: ${this.name}, Grade: ${this.grade}`;
    }
}
class Teacher {
    name;
    subject;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    getInfo() {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}
class School {
    name;
    students;
    teachers;
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log(`School: ${this.name}`);
        console.log("\n--- Teachers ---");
        this.teachers.forEach(teacher => {
            console.log(teacher.getInfo());
        });
        console.log("\n--- Students ---");
        this.students.forEach(student => {
            console.log(student.getInfo());
        });
    }
}
//test
const school = new School("IUH");
school.addTeacher(new Teacher("Thầy Thắng", "Lập trình mobile"));
school.addTeacher(new Teacher("Thầy Tiến", "Lập trình mobile"));
school.addStudent(new Student("Phan Phước Hiệp", "10th"));
school.addStudent(new Student("PPH", "9th"));
school.displayInfo();
//# sourceMappingURL=School.js.map