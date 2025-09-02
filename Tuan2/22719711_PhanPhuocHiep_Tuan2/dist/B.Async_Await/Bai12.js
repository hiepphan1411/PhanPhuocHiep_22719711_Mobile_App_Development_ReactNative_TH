"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task completed in ${ms} ms`);
        }, ms);
    });
}
async function runTasks() {
    const result = await simulateTask(2000);
    console.log(result);
}
//test
runTasks();
//so sanh voi promise.all
async function runMultipleTasks() {
    const results = await Promise.all([
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(3000)
    ]);
    console.log("All tasks completed:");
    results.forEach((res) => console.log(res));
}
runMultipleTasks();
//# sourceMappingURL=Bai12.js.map