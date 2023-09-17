"use strict";
// topic::::4-6: Getters and Setters in Typescript
class BankAccount1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    // getter
    get balanceshow() {
        return this.balance;
    }
    // setter
    set addDeposit(amout) {
        this.balance = this.balance + amout;
    }
    getbalance(sent) {
        // console.log(`This is my balance ${this.balance} and sent balance ${sent}`)
        return `This is my balance ${this.balance} and sent balance ${sent}`;
    }
}
const myaccount1 = new BankAccount1('55', 'julfiker', 5000);
// myaccount1.getbalance(55)
// getter output
console.log('balance:' + myaccount1.balanceshow);
// setter output
myaccount1.addDeposit = 8000;
console.log('disposit:' + myaccount1.balanceshow);
