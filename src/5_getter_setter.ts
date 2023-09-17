// topic::::4-6: Getters and Setters in Typescript
class BankAccount1{
    public id:string;
    public name:string;
    private balance:number;

    constructor(id:string,name:string,balance:number){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
    // getter
    get balanceshow():number{
        return this.balance
    }
    // setter
    set addDeposit(amout:number){
       this.balance=this.balance+amout
    }


    getbalance(sent:number | null):any{
        // console.log(`This is my balance ${this.balance} and sent balance ${sent}`)
        return `This is my balance ${this.balance} and sent balance ${sent}`
    }
}


const myaccount1=new BankAccount1('55','julfiker',5000)
// myaccount1.getbalance(55)
// getter output
console.log('balance:'+myaccount1.balanceshow)
// setter output
myaccount1.addDeposit=8000
console.log('disposit:'+myaccount1.balanceshow)