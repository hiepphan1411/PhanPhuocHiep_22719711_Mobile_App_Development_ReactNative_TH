"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function multiplyByThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
//chay song song
async function runParallel() {
    const results = await Promise.all([
        multiplyByThree(5),
        multiplyByThree(10),
        multiplyByThree(15)
    ]);
    console.log(results);
}
runParallel();
//# sourceMappingURL=Bai16.js.map