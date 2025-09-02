"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function waitFiveSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Đã đợi 5 giây!');
        }, 5000);
    });
}
//test
waitFiveSeconds().then((message) => console.log(message));
//# sourceMappingURL=Bai26.js.map