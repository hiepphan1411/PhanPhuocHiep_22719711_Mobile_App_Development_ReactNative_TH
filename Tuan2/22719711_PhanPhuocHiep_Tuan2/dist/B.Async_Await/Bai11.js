"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function sayHello() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello PPH");
        }, 2000);
    });
}
async function testSayHello() {
    const message = await sayHello();
    console.log(message);
}
//test
testSayHello();
//# sourceMappingURL=Bai11.js.map