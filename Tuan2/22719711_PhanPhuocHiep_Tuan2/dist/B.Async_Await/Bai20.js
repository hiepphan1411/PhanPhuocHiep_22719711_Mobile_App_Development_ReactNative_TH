"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUserWithTimeout(id) {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000));
    const apiCall = new Promise((resolve) => setTimeout(() => resolve({ id, name: "User " + id }), 3000) //delay 3s > 2s => error
    );
    return await Promise.race([apiCall, timeout]);
}
//test
fetchUserWithTimeout(1)
    .then(user => console.log("User fetched:", user))
    .catch(error => console.error("Error fetching user:", error));
//# sourceMappingURL=Bai20.js.map