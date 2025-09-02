"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    return todo;
}
//test
fetchTodo().then(todo => console.log("Todo fetched:", todo));
//# sourceMappingURL=Bai21.js.map