"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "User " + id });
        }, 1000);
    });
}
async function runFetchUser() {
    const user = await fetchUser("U01");
    console.log(user);
}
runFetchUser();
//# sourceMappingURL=Bai18.js.map