"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNumber() {
    return new Promise((resole) => {
        setTimeout(() => {
            resole(10);
        }, 1000);
    });
}
//test
getNumber().then((num) => {
    console.log(num);
});
//# sourceMappingURL=Bai2.js.map