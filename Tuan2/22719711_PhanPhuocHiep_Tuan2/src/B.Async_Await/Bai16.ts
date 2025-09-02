async function multiplyByThree(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}

//chay song song
async function runParallel() {
    const results = await Promise.all([
        multiplyByThree(5),
        multiplyByThree(10),
        multiplyByThree(15)
    ]);
    console.log(results);
}

runParallel();