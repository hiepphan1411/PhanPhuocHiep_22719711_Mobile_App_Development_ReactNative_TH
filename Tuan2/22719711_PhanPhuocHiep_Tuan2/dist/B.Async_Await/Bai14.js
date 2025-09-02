"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyByThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
//test
async function runTest() {
    const result = await multiplyByThree(5);
    console.log(result);
}
runTest();
//# sourceMappingURL=Bai14.js.map