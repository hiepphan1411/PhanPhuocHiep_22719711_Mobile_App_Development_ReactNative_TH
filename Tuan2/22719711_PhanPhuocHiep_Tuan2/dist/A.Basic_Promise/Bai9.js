"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumber = numbers.filter((num) => num % 2 == 0);
            resolve(evenNumber);
        }, 1000);
    });
}
//test
const numbers = [1, 2, 3, 4, 5, 6];
filterEvenNumbers(numbers).then((num) => {
    console.log(`Chia hết cho 2: ${num}`);
});
//# sourceMappingURL=Bai9.js.map