"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name}, ${this.age} tuổi`;
    }
}
const userRepository = new Repository();
userRepository.add(new User("PPH", 30));
userRepository.add(new User("Hiệp", 21));
const users = userRepository.getAll();
users.forEach(user => console.log(user.toString()));
//# sourceMappingURL=Repository.js.map