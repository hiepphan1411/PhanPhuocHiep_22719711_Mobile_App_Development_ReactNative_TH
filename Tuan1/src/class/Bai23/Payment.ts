interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Đã chuyển ${amount} bằng tiền mặt.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Đã chuyển ${amount} bằng thẻ tín dụng.`);
    }
}
//test

const cashPayment = new CashPayment();
cashPayment.pay(100);

const cardPayment = new CardPayment();
cardPayment.pay(200);
