class Book {
    constructor(public title: string, public author: string) {}
}

class User {
    constructor(public name: string, public age: number) {}
}

class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    addUser(user: User) {
        this.users.push(user);
    }

    listBooks() {
        return this.books;
    }

    listUsers() {
        return this.users;
    }
}

//test
const library = new Library();

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
library.addBook(book1);
library.addBook(book2);

const user1 = new User("PPH", 30);
const user2 = new User("Phan Hiệp", 20);
library.addUser(user1);
library.addUser(user2);

console.log("Sách trong thư viện:");
library.listBooks().forEach(book => {
    console.log(`- ${book.title}. Tác giả: ${book.author}`);
});

console.log("Người dùng trong thư viện:");
library.listUsers().forEach(user => {
    console.log(`- ${user.name}, Tuổi: ${user.age}`);
});