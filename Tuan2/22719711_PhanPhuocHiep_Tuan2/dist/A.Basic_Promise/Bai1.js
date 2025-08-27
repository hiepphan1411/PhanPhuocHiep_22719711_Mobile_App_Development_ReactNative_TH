"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello PPH");
        }, 2000);
    });
}
//test
sayHello().then((message) => {
    console.log(message);
});
//# sourceMappingURL=Bai1.js.map