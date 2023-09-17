// javascript solution example -----
// basic class example--
class student4{
   name:string;
   age:number;
   myclass:string;
    constructor(name:string,age:number,myclass:string){
        this.name=name
        this.age=age
        this.myclass=myclass
    }
    showprofile(){
        console.log(`This your name ${this.name} and  ${this.age}`)
    }
}
const result4=new student4('julfiker',44,'Eight')
const result24=new student4('julfiker1',441,'Eight1')
result4.showprofile()
// result2.showprofile()

// typescript example solutions-----
class student{
    constructor(public name:string,public age:number,public myclass:string){}
    showprofile(){
        console.log(`This your name ${this.name} and  ${this.age}`)
    }
}
const result=new student('julfiker',44,'Eight')
const result2=new student('julfiker1',441,'Eight1')
result.showprofile()
result2.showprofile()