function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} ms`);
        }, time)
    });
}

Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then((results) => {
    console.log("Done!");
    results.forEach((result, index) => {
        console.log(`Result ${index + 1}`, result);
    })
}).catch((err) => {
    console.error(err);
})