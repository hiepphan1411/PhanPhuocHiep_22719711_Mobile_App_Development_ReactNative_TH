"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "User " + id });
        }, 1000);
    });
}
//Async function fetchUsers(ids) gọi fetchUser cho từng ID
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
}
//test
fetchUsers(["U01", "U02", "U03"]).then(users => console.log(users));
//# sourceMappingURL=Bai19.js.map