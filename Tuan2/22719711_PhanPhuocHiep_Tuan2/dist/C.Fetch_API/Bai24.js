"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: 100,
            title: 'Lam bai tap Mobile',
            completed: false
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    const data = await response.json();
    console.log(data);
}
postData();
//# sourceMappingURL=Bai24.js.map