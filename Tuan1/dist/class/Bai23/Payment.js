"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashPayment {
    pay(amount) {
        console.log(`Đã chuyển ${amount} bằng tiền mặt.`);
    }
}
class CardPayment {
    pay(amount) {
        console.log(`Đã chuyển ${amount} bằng thẻ tín dụng.`);
    }
}
//test
const cashPayment = new CashPayment();
cashPayment.pay(100);
const cardPayment = new CardPayment();
cardPayment.pay(200);
//# sourceMappingURL=Payment.js.map