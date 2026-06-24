class BankAccount {
    #balance = 0; //hidden field --hidden from outside
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    getbalance() {
        return this.#balance;// controlled access.
    }
}
const account = new BankAccount();
account.deposit(1000);
let balance = account.getbalance();
console.log("balance" + balance);

console.log(account.balance);// undefined , can't access the private var outside the class
//(no public field by that name)
