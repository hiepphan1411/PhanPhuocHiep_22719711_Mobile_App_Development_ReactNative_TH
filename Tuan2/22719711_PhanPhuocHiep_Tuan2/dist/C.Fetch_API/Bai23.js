"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchCompletedTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const completedTodos = todos.filter((todo) => todo.completed);
    return completedTodos;
}
//test
fetchCompletedTodos().then(completedTodos => console.log(completedTodos));
//# sourceMappingURL=Bai23.js.map