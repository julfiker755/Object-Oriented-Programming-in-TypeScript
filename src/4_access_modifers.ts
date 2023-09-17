// topic::::4-5: Access Modifiers: Public, Private, Protected
class BankAccount{
    public id:string;
    public name:string;
    private balance:number;
    constructor(id:string,name:string,balance:number){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
    getbalance(){
        console.log(`This is my balance ${this.balance}`)
    }
}

// class studentaccount extends BankAccount{
//     balance(){
//         this.
//     }
// }

const myaccount=new BankAccount('55','julfiker',6666)
// myaccount.balance=0
console.log(myaccount.getbalance())