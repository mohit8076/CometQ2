// class Student{
//     rollnumber:number
//     name:string
//     constructor(rollnumber:number, name:string){
//         this.rollnumber = rollnumber
//         this.name = name
//     }
//     displayInformation():void{
//         console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
//     }
// }
// var student1 = new Student(2, "Rohit")
// var student2 = new Student(4, "Kohli")
// console.log(student1.name)
// console.log(student2.rollnumber)
// student1.displayInformation()
// student2.displayInformation()
// CLASS EXTENDS CLASS
// class Car {   
//     Color:string     
//     constructor(color:string) {   
//        this.Color = color  
//     }   
//  }   
//  class Audi extends Car {   
//      Price: number  
//      constructor(color: string, price: number) {  
//          super(color);  
//          this.Price = price;  
//      }  
//      display():void {  
//          console.log("Color of Audi car: " + this.Color);  
//          console.log("Price of Audi car: " + this.Price);  
//      }  
//  }  
//  let obj = new Audi(" Black", 8500000 );  
//  obj.display();  
// CLASS IMPLEMENTS INTERFACE
// interface Car {
//     color : string;
// }
// interface Car1 extends Car {
//     car : Car;
//     price : number;
//     display():void;
// }
// class Audi implements Car1 {
//     car : Car;
//     price : number;
//     color: string;
//     constructor(color:string, price:number){
//     this.color = color;
//     this.price = price;
//     }
//     display() {
//     console.log("Color of Audi car: " + this.color);  
//     console.log("Price of Audi car: " + this.price);  
//     }
// }
// let car:Car1 = new Audi("Black",8500000);
// car.display();
//GENERICS CAR
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setKeyVAlue = function (Color, Price) {
        this.Color = Color;
        this.Price = Price;
    };
    Car.prototype.display = function () {
        console.log("Color of Audi = ".concat(this.Color, ", Price of Audi = ").concat(this.Price));
    };
    return Car;
}());
var car = new Car();
car.setKeyVAlue("Black", 850000);
car.display();
