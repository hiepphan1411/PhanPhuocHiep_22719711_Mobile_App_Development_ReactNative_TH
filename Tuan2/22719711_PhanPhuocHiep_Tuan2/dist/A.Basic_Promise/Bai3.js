"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError() {
    return new Promise((_, resole) => {
        setTimeout(() => {
            resole(new Error("Something went wrong"));
        }, 1000);
    });
}
//test
throwError().then(() => {
    console.log("This will not run");
}).catch((err) => {
    console.error(err);
});
//# sourceMappingURL=Bai3.js.map