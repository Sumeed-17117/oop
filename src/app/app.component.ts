import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  BMW = new Car("lollipop","chocolate")
  Event1(){
    console.log(this.BMW.getDetails())
  }
  employee=[]
  title = 'oop-learning';
}
class Car {
 engine:string
 tire:String
 constructor(engine:any,tire:any)
 {
  this.engine=engine
  this.tire=tire
 }
 getDetails(): string{
  return (this.engine +" "+  this.tire)
 }
}
let BMW = new Car ("BMW","Dunlop")
BMW.getDetails()



// class Bottles {
//   color!: string;
//   shape!: string;
//   capacity!: number;
//   available!: boolean;

//   setData(color:string,shape:string,capacity:number,available:false)
//   {
//     this.color=color
//     this.shape=shape
//     this.capacity=capacity
//     this.available=available
//   }

//   getcolor() {
//     console.log("bottle 1 color is " +this.color);
//   }
//   getShape(){
//     console.log(`the shape of this bottle is `,this.shape)
//   }
//   getcapacity(){
//     console.log(`this bottle has a capacity of `+this.capacity+` mL`)
//   }
//   Availability(){
//     console.log(`is this bottle available ?` +this.available)
//   }
//   Display(){
//     console.log(this.color)
//     console.log(this.shape)
//     console.log(this.capacity)
//   }
// }
// class Cars {
//   make!:string;
//   model!:number;
//   name!:string

//   getname(){
//     console.log(this.name)
//   }
//   getmake(){
//     console.log(this.make)
//   }
//   getmodel(){
//     console.log(this.model)
//   }
//   setData(name:string,model:number,make:string){
//     this.name=name;
//     this.model=model;
//     this.make=make;
//   }
// }
// let bot1=new Bottles();
// bot1.color="purple";
// bot1.shape="circular";
// bot1.capacity=240;
// bot1.available=false;
// bot1.getcolor()
// bot1.getShape()
// bot1.getcapacity()

// let bot2 = new Bottles();
// bot2.color="Green"
// bot2.shape="rectangle"
// bot2.capacity=400
// bot2.available=true
// bot2.getcolor()
// bot2.getShape()
// bot2.getcapacity()

// let car0=new Cars()
// car0.make="Honda"
// car0.model=2008
// car0.name="Honda City Aspire"
// car0.getmake()
// car0.getmodel()
// car0.getname()

// let car2 = new Cars()
// car2.setData("honda and Toyota",2011,"Oshan X 7")
// car2.getmake()
// car2.getmodel()
// car2.getname()
// class Devices {                               //Class Devices
//   type!:string
//   name!:string
//   price!:number

//   setData(type:string,name:string,price:number){
//     this.type=type
//     this.name=name
//     this.price=price
//   }
//   Display(){
//     console.log(this.type)
//     console.log(this.name)
//     console.log(this.price)
//   }

// }
// let item0=new Devices()                               //Object of class Devices
// item0.setData("Mobile","Samsung Galaxy Series",2901238)
// item0.Display()

// let item2= new Devices()                               //Object of class Devices
// item2.setData("Tablet","Apple iphone",899999)
// item2.Display()

// class Sweets {                               //Class of Sweets
//   name!:String
//   sugarcongtent!:number
//   price!:number
//   setData(name:string,sugarcongtent:number,price:number){
//     this.name=name
//     this.price=price
//     this.sugarcongtent=sugarcongtent

//   }
//   Display(){
//     console.log(this.name)
//     console.log(this.price)
//     console.log(this.sugarcongtent)
//   }
// }
// let gulabjamun=new Sweets()                               //Object of class Sweets
// gulabjamun.setData("gulabjamun",20190237,250)
// gulabjamun.Display()

// let rashgullah = new Sweets()                               //Object of class Sweets
// rashgullah.setData("rashgullah",100892839218.242847,100)
// rashgullah.Display()

// let bot3 = new Bottles()                               //Object of class Bottle
// bot3.setData("Golden","parallelogram",289,false)
// bot3.Display()

// class Vehicle {                               // class Vehicle created with constructor
//   type!:string;
//   wheels!:any;
//   horsepower!:number;
//   manufacturer!:string

//   constructor (type:string,wheels:any,horsepower:number,manufacturer:string){
//     this.type=type
//     this.wheels=wheels
//     this.horsepower=horsepower
//     this.manufacturer=manufacturer
//   }
//   getDetails(){
//     console.log(this.type)
//     console.log(this.wheels)
//     console.log(this.horsepower)
//     console.log(this.manufacturer)
//   }
// }
// let riksha= new Vehicle("common",3,298,`Sazgar`)                                 //Object of class Vehicle
// riksha.getDetails()

// let fourbyfour = new Vehicle("4 X 4",4,987,"Ford")                            //Object of class Vehicle
// fourbyfour.getDetails()

// let sedan = new Vehicle(`Sedan`,4,500,`Mitsubishi`)
// sedan.getDetails()

// class Company {
//   name!:string
//   estab!:number
//   country:number=45
//   constructor(name:string,estab:number){
//     this.name=name
//     this.estab=estab
//   }
//   Dinfo1(){
//     console.log(this.name)
//     console.log(this.estab)
//     console.log(this.country)
//   }
//   CNO(){
//     console.log(this.country)
//   }
//   }
//   class FoodC extends Company{
//     owner!:string
//     country:number=23
//     constructor(owner:string,name:string,estab:number){
//       super(name,estab)
//       this.owner=owner
//     }
//     Dinfoshan(){
//       console.log(this.owner)
//       console.log(this.name)
//       console.log(this.estab)
//     }
//   }
//   let Shanfoods = new FoodC("maisam","ShanFoods",1986)
//   Shanfoods.Dinfoshan()
//   Shanfoods.CNO()
//   Shanfoods.Dinfo1()

//   class BevC extends Company {
//     owner!:string
//     country:number=9898989
//     constructor(owner:string,name:string,estab:number){
//       super(name,estab)
//       this.owner=owner
//     }
//     Dinfobev(){
//       console.log(this.owner)
//       console.log(this.name)
//       console.log(this.estab)
//     }
//   }
// let pepsi = new BevC("Sumeed",`Pepsi-Co`,1967)
//     pepsi.Dinfobev()

// let coke = new BevC (`Areeba`,`Coca-Cola`,1986)
// coke.Dinfobev()

// let malt = new BevC (`Aiman`,`Murre Breweries`,1678)
// malt.Dinfobev()
// malt.Dinfo1()
// // _____________________________________________________________________________________________________________________

// // -----------------------------> LEARNING OVER RIDING METHODS <------------------------------------------------------------

// class Person {
//   hasLoan:boolean=true
//   name!:string
//   ammount!:number
//   deficit!:number
//   constructor(hasLoan:boolean,name:string,ammount:number,deficit:number){
//     this.hasLoan=hasLoan
//     this.name=name
//     this.ammount=ammount
//     this.deficit=deficit
//   }
//   getPerson(){
//     console.log(`has loan `+this.hasLoan)
//     console.log(`name `+this.name)
//     console.log(`Ammount `+this.ammount)
//     console.log(`Deficit `+this.deficit)
//   }
// }
// class Male extends Person {
//   getPerson(){
//     console.log(`the below 2 outpur are coming from child class, male intead of parent class Person because i have given child class male a over-rideing method of getPerson()`)
//     console.log(this.hasLoan)
//     console.log(this.name,this.ammount,this.deficit)
//   }
// }
// class Female extends Person{}
// let Sumeed=new Male(false,"Sumeed",1,1)
// Sumeed.getPerson()

// let Shariq= new Male(true,"Shariq",189872,1000)
// Shariq.getPerson()

// let Areeba = new Female (false,"Areeba",786412748912,653621563)
// console.log(`this below output is coming from parent class of person instead of child class of female because i havent given an over riding method of getPerson to female class `)
// Areeba.getPerson()

