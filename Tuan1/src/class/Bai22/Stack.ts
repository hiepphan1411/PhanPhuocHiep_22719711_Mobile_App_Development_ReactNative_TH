class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
//test
const numberStack = new Stack<number>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop()); 
console.log(numberStack.peek()); 
console.log(numberStack.isEmpty()); 