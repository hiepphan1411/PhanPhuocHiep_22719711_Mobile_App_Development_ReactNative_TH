function throwError(): Promise<never> {
    return new Promise((_, resole) => {
        setTimeout(() => {
            resole(new Error("Something went wrong"))
        }, 1000)
    })
}

//test
throwError().then(() => {
    console.log("This will not run");
}).catch((err) => {
    console.error(err);
})