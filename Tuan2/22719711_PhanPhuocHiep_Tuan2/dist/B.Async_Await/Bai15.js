"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyByThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
//chay function tuan tu
async function runSequential() {
    const result1 = await multiplyByThree(5);
    console.log(result1);
    const result2 = await multiplyByThree(10);
    console.log(result2);
    const result3 = await multiplyByThree(15);
    console.log(result3);
}
runSequential();
//# sourceMappingURL=Bai15.js.map