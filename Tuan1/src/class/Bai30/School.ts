class Student {
    name: string;
    grade: string;

    constructor(name: string, grade: string){
        this.name = name;
        this.grade = grade;
    }

    getInfo(): string {
        return `Student: ${this.name}, Grade: ${this.grade}`;
    }
}

class Teacher {
    name: string;
    subject: string;

    constructor(name: string, subject: string){
        this.name = name;
        this.subject = subject;
    }

    getInfo(): string {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}

class School {
    name: string;
    students: Student[];
    teachers: Teacher[];
    
    constructor(name: string) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }
    
    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
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
