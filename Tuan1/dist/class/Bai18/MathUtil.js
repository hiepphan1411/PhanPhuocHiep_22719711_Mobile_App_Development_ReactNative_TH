"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0.");
        }
        return a / b;
    }
}
//test
console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3));
console.log(MathUtil.multiply(5, 3));
try {
    console.log(MathUtil.divide(5, 0));
}
catch (error) {
    console.error(error.message);
}
//# sourceMappingURL=MathUtil.js.map