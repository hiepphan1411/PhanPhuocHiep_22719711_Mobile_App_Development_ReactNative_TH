"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchDataDemo(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Tải data thành công!");
            }
            else {
                reject(new Error("Tải data thất bại!"));
            }
        }, 2000);
    });
}
//test dung async de xu ly loi
async function run() {
    try {
        const result = await fetchDataDemo(false);
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
run();
//# sourceMappingURL=Bai13.js.map