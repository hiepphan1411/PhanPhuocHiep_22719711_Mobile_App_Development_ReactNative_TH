class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}
//test
const box1 = new Box<string>("Hello Phan Phuoc Hiep");
console.log(box1.getValue());
