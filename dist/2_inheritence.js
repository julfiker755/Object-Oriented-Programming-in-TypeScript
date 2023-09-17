"use strict";
// Inheritence
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
// child 
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr.X', 15, 'Uganda');
console.log(student1.makeSleep(66));
//   student1.
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
