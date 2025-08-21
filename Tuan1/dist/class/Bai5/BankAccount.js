"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Thêm: ${amount}`);
        }
        else {
            console.log("Amount phải lớn hơn 0");
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Khấu trừ ${amount}`);
            }
            else {
                console.log("Không đủ tiền trong tài khoản");
            }
        }
        else {
            console.log("Amount phải lớn hơn không");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
console.log(`Khởi tạo: ${account.getBalance()}`);
account.deposit(500);
console.log(`Deposited: ${account.getBalance()}`);
account.withdraw(200);
console.log(`Withdraw: ${account.getBalance()}`);
//# sourceMappingURL=BankAccount.js.map