class Account {
    public accountNumber: string;
    private accountHolder: string;
    private readonly createdAt: Date;

    constructor(accountNumber: string, accountHolder: string) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.createdAt = new Date();
    }

    public getAccountInfo(): string {
        return `Số tài khoản: ${this.accountNumber}, Chủ tài khoản: ${this.accountHolder}, Ngày tạo: ${this.createdAt}`;
    }
}
const myAccount = new Account("0802042345", "Phan Phước Hiệp");
console.log(myAccount.getAccountInfo());
