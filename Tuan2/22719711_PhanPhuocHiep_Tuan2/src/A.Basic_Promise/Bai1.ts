function sayHello(): Promise<string> {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve("Hello PPH");
        },2000);
    });
}

//test
sayHello().then((message) => {
    console.log(message);
})