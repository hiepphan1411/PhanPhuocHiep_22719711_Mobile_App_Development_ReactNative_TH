"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    accountHolder;
    createdAt;
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.createdAt = new Date();
    }
    getAccountInfo() {
        return `Số tài khoản: ${this.accountNumber}, Chủ tài khoản: ${this.accountHolder}, Ngày tạo: ${this.createdAt}`;
    }
}
const myAccount = new Account("0802042345", "Phan Phước Hiệp");
console.log(myAccount.getAccountInfo());
//# sourceMappingURL=Account.js.map