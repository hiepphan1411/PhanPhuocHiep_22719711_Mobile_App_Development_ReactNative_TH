"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
//test
simulateTask(1500).then((message) => {
    console.log(message);
});
//# sourceMappingURL=Bai5.js.map