async function downloadFile(fileName: string){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Downloaded file: ${fileName}`);
        }, 3000);
    });
}

//test
downloadFile('file1.txt').then((message) => console.log(message));