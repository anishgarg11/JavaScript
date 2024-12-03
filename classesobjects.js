// // objects
// const students1 = {
//     name : "anish garg",
//     marks : 95.0,
//     printMarks : function(){
//         console.log("marks =", this.marks);
//     },
// };

// // classes 
// class Car{
// constructor(brand, Color, Mileage, BuildQuality){
//     console.log("Creating new Object");
//     this.brand = brand;
//     this.Mileage = Mileage;
//     this.Color = Color;
//     this.BuildQuality = BuildQuality;
// }
//  start(){
//     console.log("start");
//  }

//  stop(){
//     console.log("stop");
//  }
// }

// let Toyota = new Car("fortuner", "red", 10, "High");
// console.log(Toyota);
// let Suzuki = new Car("Swift Dzire", "White", 20, "Moderate");
// console.log(Suzuki);
// let Honda = new Car("Jazz","Black", 30, "Low");
// console.log(Honda);

// // inheritance Pass down the property
// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class child extends Parent{

// }
// let obj = new child();

// class Person{
//     constructor(name){
//         this.species = "Homo Spa";
//         this.name = name;
//     }
//     eat(){
//         console.log("Eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("Solve Problems", "Build Something");
//     }
// }

// let anishObj = new Engineer("Anish");

// Question
let DATA = "Secret Info.";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA);
    }
}
let Student1 = new User("anish garg", "garganish55@gmail.com");
let Student2 = new User("Ashish", "ashish@gmail.com");

let teacher1 = new User("Dean", "Dean@gmail.com");