"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchWithError(id) {
    // if (id === 2) throw new Error("Simulated error for id=2");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await response.json();
}
async function runAllSettled() {
    const results = await Promise.allSettled([
        fetchWithError(1),
        fetchWithError(2),
        fetchWithError(3),
    ]);
    results.forEach((res, index) => {
        if (res.status === "fulfilled") {
            console.log(`Task ${index + 1} success:`, res.value);
        }
        else {
            console.error(`Task ${index + 1} failed:`, res.reason);
        }
    });
}
//test
runAllSettled();
//# sourceMappingURL=Bai30.js.map