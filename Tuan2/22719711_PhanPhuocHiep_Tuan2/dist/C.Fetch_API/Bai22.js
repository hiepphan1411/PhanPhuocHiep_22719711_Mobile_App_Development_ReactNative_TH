"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchMultipleTodos() {
    const ids = [1, 2, 3, 4];
    const fetchPromises = ids.map(id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json()));
    const todos = await Promise.all(fetchPromises);
    return todos;
}
//test
fetchMultipleTodos().then(todos => console.log("Todos fetched:", todos));
//# sourceMappingURL=Bai22.js.map