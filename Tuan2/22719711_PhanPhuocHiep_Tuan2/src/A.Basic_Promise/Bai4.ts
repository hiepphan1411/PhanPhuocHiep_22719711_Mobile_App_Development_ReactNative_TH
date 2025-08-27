function getRandomNumber(): Promise<number> {
    return new Promise((resole, reject) => {
        const num = Math.random();
        if (num < 0.1) {
            reject(new Error("Random số quá nhỏ"));
        } else {
            resole(num);
        }
    })
}
//test
getRandomNumber().then((num) => {
    console.log("Số random: ", num);
}).catch((err) => {
    console.error(err);
})