"use strict";
//topic:**** Type Guards / Type Narrowing
function add(parms1, parms2) {
    if (typeof parms1 === "number" && typeof parms2 === "number") {
        return parms1 + parms2;
    }
    else if (typeof parms1 === 'number' && typeof parms2 === 'string') {
        return parms1 + parms2;
    }
    else if (typeof parms1 === 'string' && typeof parms2 === 'number') {
        return parms1 + parms2;
    }
    else {
        return parms1.toString() + parms2.toString();
    }
}
// output result--
console.log(add('ami', 'tumi'));
console.log(add(5000, 'Tk'));
console.log(add("password", 123));
console.log(add(3, 6));
function getusercheck(user) {
    if ('role' in user) {
        return `This is admin user ${user.role}`;
    }
    else {
        return `This is normal user`;
    }
}
const nomarlnuser1 = { name: 'Mr.boss' };
const adminuser1 = { name: 'Mr.ali', role: "admin" };
// output
console.log(getusercheck(nomarlnuser1));
console.log(getusercheck(adminuser1));
// instaceof gurads ******Node::: class and object ke gurads kore******
class Animal {
    constructor(name, spceies) {
        this.name = name;
        this.spceies = spceies;
    }
    makesound() {
        console.log('I making a sound');
    }
}
class dog extends Animal {
    constructor(name, spceies) {
        super(name, spceies);
    }
    makegei() {
        console.log('I am gei gei');
    }
}
class cat extends Animal {
    constructor(name, spceies) {
        super(name, spceies);
    }
    makemeaw() {
        console.log('I am meaw meaw');
    }
}
function getanimal(obj) {
    if (obj instanceof dog) {
        obj.makegei();
    }
    else if (obj instanceof cat) {
        obj.makemeaw();
    }
    else {
        obj.makesound();
    }
}
const animal = new Animal('parent', 'all');
const animal1 = new dog('garman vai', 'dog');
const animal2 = new cat('parisan vai', 'cat');
// funcation call
getanimal(animal);
/*
 **************** extra niom  instaceof gurads flow **************
class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      console.log("I am making sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(" I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }
  
  function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
  }
  
  function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
  }
  
  function getAnimal(animal: Animal) {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  }
  
  const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
  const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat
  
  getAnimal(animal2);
  
*/ 
