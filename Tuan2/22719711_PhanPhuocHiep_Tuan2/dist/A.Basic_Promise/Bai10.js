"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Promise.resolve("Success")
    .then((result) => {
    console.log("Result:", result);
})
    .catch((error) => {
    console.error("Error:", error);
})
    .finally(() => {
    console.log("Done");
});
//# sourceMappingURL=Bai10.js.map