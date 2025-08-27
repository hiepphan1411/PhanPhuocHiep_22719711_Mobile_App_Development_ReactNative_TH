"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Promise.resolve(2)
    .then((num) => {
    const squared = num * num;
    console.log("Squared:", squared);
    return squared;
})
    .then((squared) => {
    const doubled = squared * 2;
    console.log("Doubled:", doubled);
    return doubled;
})
    .then((doubled) => {
    const result = doubled + 5;
    console.log("Result:", result);
});
//# sourceMappingURL=Bai8.js.map