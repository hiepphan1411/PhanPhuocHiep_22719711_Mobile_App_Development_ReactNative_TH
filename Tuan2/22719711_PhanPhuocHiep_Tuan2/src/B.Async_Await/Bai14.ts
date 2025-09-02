async function multiplyByThree(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}

//test
async function runTest() {
    const result = await multiplyByThree(5);
    console.log(result); 
}

runTest();
