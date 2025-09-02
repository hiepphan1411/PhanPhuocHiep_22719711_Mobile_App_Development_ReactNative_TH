async function simulateTask(id: number, ms: number) {
    const response = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json());
    return response;
}
//Chạy tuần tự các task
async function queueProcess() {
    const tasks = [
        () => simulateTask(1, 1000),
        () => simulateTask(2, 1500),
        () => simulateTask(3, 2000),
    ];

    for (const task of tasks) {
        const result = await task();
        console.log("Queue result:", result);
    }
}

queueProcess();
