function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} ms`);
        }, time)
    });
}

Promise.race([
    simulateTask(3000),
    simulateTask(1000),
    simulateTask(2000)
]).then((result) => {
    console.log("First done:", result);
}).catch((error) => {
    console.error(error);
})