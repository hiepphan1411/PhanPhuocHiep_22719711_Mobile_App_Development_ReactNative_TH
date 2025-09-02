async function multiplyByThree(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}

async function runForAwait() {
    const promises = [
        multiplyByThree(5),
        multiplyByThree(10),
        multiplyByThree(15)
    ];

    for await (const result of promises) {
        console.log(result);
    }
}

runForAwait();