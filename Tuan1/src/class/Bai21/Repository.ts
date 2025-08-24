class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}
class User {
    constructor(public name: string, public age: number) {}
    toString(): string {
        return `${this.name}, ${this.age} tuổi`;
    }
}
const userRepository = new Repository<User>();
userRepository.add(new User("PPH", 30));
userRepository.add(new User("Hiệp", 21));
const users = userRepository.getAll();
users.forEach(user => console.log(user.toString()));
