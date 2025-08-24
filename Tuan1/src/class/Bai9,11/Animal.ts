interface Animal {
    name: string;
    sound(): string;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Pull!";
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): string {
        return "Meo!";
    }
}

console.log(new Dog("Dog").sound());
console.log(new Cat("Cat").sound());