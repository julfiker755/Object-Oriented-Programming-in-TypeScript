// 4-8: Polymorphism
// poly=অনেকগুলো   morphism=রূপ *Note*:যে জিনিসগুলোর অনেকগুলো রূপ থাকবে তাকে পলিমরফ্রিজম বলে
class Person {
    takeNap(): void {
      console.log("I am sleeping 8 hours per day");
    }
  }
  
  class Studentt extends Person {
    takeNap(): void {
      console.log(`I am sleeping 10 hours per day`);
    }
  }
  
  class Developer extends Person {
    takeNap(): void {
      console.log(`I am sleeping 5 hours per day`);
    }
  }
//   output area
  
function getNap(parms:Person){
    parms.takeNap()
}

  const person1=new Person()
  const person2=new Studentt()
  const person3=new Developer()
  getNap(person1)
  getNap(person2)
  getNap(person3)





//   Extra niyom pratic
class Shape {
    getArea(): number {
      return 0;
    }
  }
  
  // area -> pi *r *r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
  }
  
  getAreaOfShape(new Circle(10));
  getAreaOfShape(new Rectangle(10, 12));
  