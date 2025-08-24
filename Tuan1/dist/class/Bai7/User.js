"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    setter(newName) {
        this.name = newName;
    }
    getter() {
        return this.name;
    }
}
const user = new User("Phan Phước Hiệp");
console.log(user.getter());
user.setter("KTPM18A");
console.log(user.getter());
//# sourceMappingURL=User.js.map