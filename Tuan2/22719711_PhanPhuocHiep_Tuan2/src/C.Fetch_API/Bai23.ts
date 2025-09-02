async function fetchCompletedTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const completedTodos = todos.filter((todo: { completed: boolean }) => todo.completed);
    return completedTodos;
}

//test
fetchCompletedTodos().then(completedTodos => console.log(completedTodos));