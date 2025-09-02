"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyByThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
async function runForAwait() {
    const promises = [
        multiplyByThree(5),
        multiplyByThree(10),
        multiplyByThree(15)
    ];
    for await (const result of promises) {
        console.log(result);
    }
}
runForAwait();
//# sourceMappingURL=Bai17.js.map