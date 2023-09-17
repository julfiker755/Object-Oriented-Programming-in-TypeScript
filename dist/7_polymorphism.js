"use strict";
// 4-8: Polymorphism
// poly=অনেকগুলো   morphism=রূপ *Note*:যে জিনিসগুলোর অনেকগুলো রূপ থাকবে তাকে পলিমরফ্রিজম বলে
class Person {
    takeNap() {
        console.log("I am sleeping 8 hours per day");
    }
}
class Studentt extends Person {
    takeNap() {
        console.log(`I am sleeping 10 hours per day`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(`I am sleeping 5 hours per day`);
    }
}
//   output area
function getNap(parms) {
    parms.takeNap();
}
const person1 = new Person();
const person2 = new Studentt();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
//   Extra niyom pratic
class Shape {
    getArea() {
        return 0;
    }
}
// area -> pi *r *r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
