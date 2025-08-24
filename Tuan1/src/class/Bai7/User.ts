class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    setter(newName: string): void {
        this.name = newName;
    }
    getter(): string {
        return this.name;
    }
}

const user = new User("Phan Phước Hiệp");
console.log(user.getter());
user.setter("KTPM18A");
console.log(user.getter());
