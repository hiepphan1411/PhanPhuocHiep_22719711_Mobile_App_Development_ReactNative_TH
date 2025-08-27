function getNumber(): Promise<number> {
    return new Promise((resole) => {
        setTimeout(() => {
            resole(10);
        }, 1000)
    })
}

//test
getNumber().then((num) => {
    console.log(num);
})