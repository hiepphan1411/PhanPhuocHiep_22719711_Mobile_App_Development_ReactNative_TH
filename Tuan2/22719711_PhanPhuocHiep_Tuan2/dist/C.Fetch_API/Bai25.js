"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function downloadFile(fileName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Downloaded file: ${fileName}`);
        }, 3000);
    });
}
//test
downloadFile('file1.txt').then((message) => console.log(message));
//# sourceMappingURL=Bai25.js.map