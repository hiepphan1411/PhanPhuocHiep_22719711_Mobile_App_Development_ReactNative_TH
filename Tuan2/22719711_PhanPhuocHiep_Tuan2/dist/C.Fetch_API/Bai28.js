"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Chạy 5 task song song
async function simulateTask(id, ms) {
    const response = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json());
    return response;
}
async function batchProcess() {
    const results = await Promise.all([
        simulateTask(1, 1000),
        simulateTask(2, 2000),
        simulateTask(3, 1500),
        simulateTask(4, 1200),
        simulateTask(5, 1800),
    ]);
    console.log("Results:", results);
}
//test
batchProcess();
//# sourceMappingURL=Bai28.js.map