class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number {
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
} catch (error: any) {
    console.error(error.message);
}