import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import el from "./App.js"
//import AppTwo from "./App.js"
//import Student from "./Student.js";
//import el from "./JSXexample.js";
//import Customer from "./JSXexample.js";
//import StudentNew from "./StudentNew.js";
//import Mounting from "./Mounting";
//import StudentUpdate from "./StudentUpdate";
//import Unmounting from "./Unmounting";
//import StudentUnmount from "./StudentUnmount";
//import HookFunction from "./HookFunction";
//import Conditions from "./Conditions";
//import ListsMap from "./ListsMap";
//import InlineStylesheet from "./InlineStylesheet";
//import ExternalStylesheet from "./ExternalStylesheet";
//import ControlledComponent from "./ControlledComponent";
//import UncontrolledComponent from "./UncontrolledComponent";
//import LiftingState from "./LiftingState";
//import ContextAPI from "./ContextAPI";
//import HOC from "./HOC";
//import Pictures from "./Pictures";
//import HooksExample from "./HooksExample";
//import Reducer from "./Reducer";
//import HooksExampleTwo from "./HooksExampleTwo";

//let el = <h1>React JS Application</h1>
//ReactDOM.render(el, document.getElementById("root"));
//ReactDOM.render(<AppTwo name="Pooja Ganjage"/>, document.getElementById("root"));
//ReactDOM.render(<Student type="Function and Class Component" description={"Composing Component"}/>, document.getElementById("root"));
//ReactDOM.render(<Student description={"Composing Component"}/>, document.getElementById("root")); => Default Props.
//ReactDOM.render(el, document.getElementById("root"));
//ReactDOM.render(<Customer>I am a Customer</Customer>, document.getElementById("root"));
//ReactDOM.render(<Customer>{"I am a Customer"}</Customer>, document.getElementById("root"));
//ReactDOM.render(<StudentNew rollno="101"/>, document.getElementById("root"));
//ReactDOM.render(<StudentNew description="Event Handling"/>, document.getElementById("root"));
//ReactDOM.render(<Mounting name="Deepika"/>, document.getElementById("root"));
//ReactDOM.render(<StudentUpdate />, document.getElementById("root"));
//ReactDOM.render(<Unmounting />, document.getElementById("root"));
//ReactDOM.unmountComponentAtNode(document.getElementById("root"));
//ReactDOM.render(<StudentUnmount />, document.getElementById("studentunmount"));
//ReactDOM.unmountComponentAtNode(document.getElementById("studentunmount"));
//ReactDOM.render(<HookFunction />, document.getElementById("root"));
//ReactDOM.render(<Conditions consumer={true} primeMember={true}/>, document.getElementById("root"));
//const arrayValues = [10,20,30,40,50];
//ReactDOM.render(<ListsMap numbers={[10,20,30,40,50]}/>, document.getElementById("root"));
//ReactDOM.render(<InlineStylesheet />, document.getElementById("root"));
//ReactDOM.render(<ExternalStylesheet />, document.getElementById("root"));
//ReactDOM.render(<ControlledComponent />, document.getElementById("root"));
//ReactDOM.render(<UncontrolledComponent />, document.getElementById("root"));
//ReactDOM.render(<LiftingState />, document.getElementById("root"));
//ReactDOM.render(<ContextAPI />, document.getElementById("root"));
//ReactDOM.render(<HOC />, document.getElementById("root"));
//ReactDOM.render(<Pictures />, document.getElementById("root"));
//ReactDOM.render(<HooksExample />, document.getElementById("root"));
//ReactDOM.render(<Reducer />, document.getElementById("root"));
//ReactDOM.render(<HooksExampleTwo />, document.getElementById("root"));

/****************************** JAVASCRIPT EXECUTION ******************************/
/****************************** EXECUTION PART 1 ******************************/
/*console.log(x);
var x = 10;
getName();

function getName() {
    console.log("Pooja");
}

var getName = function () {
    console.log("Pooja");
}

var getName = () => {
    console.log("Pooja");
}*/

/****************************** EXECUTION PART 2 ******************************/
/*var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 20;
    console.log(x);
}*/

/****************************** EXECUTION PART 3 ******************************/
/*var a = 20;
function b() {
    console.log(a);
    var x = 20;
}
b();
//console.log(window.a); // It gives undefined.
//console.log(a);
//console.log(this.a); // It gives an TypeError.
//console.log(a);*/

/****************************** EXECUTION PART 4 ******************************/
/*console.log(a);
var a = 10;
console.log(a);
//console.log(x);
var b;
b = 10;
console.log(b);
b = "Pooja";
console.log(b);*/

/****************************** EXECUTION PART 5 ******************************/
/*var a = 10;
function b() {
    var x = 20; // Local Scope.
    console.log(a);
}
//console.log(x); // Global Scope.
var a = 20; 
b();*/

/****************************** EXECUTION PART 6 ******************************/
//console.log(b); // Uncaught ReferenceError.
//console.log(x); // Uncaught ReferenceError.
/*var a = 10;
var a = 30; // Yes we can declare var a variable again and it override the value.
let b = 20;
b = 25;
//let b = 40; // Cannot declare let b variable again. let b is the SyntaxError. This same case happened with const also.
//var b = 50; // Cannot declare var b variable again due to already being declared by let b variable. This same case happened with const also.
//const c; // SyntaxError.
const c = 100;
//c = 200; // TypeError.
console.log(a);
console.log(b);
console.log(c);*/

/****************************** EXECUTION PART 7 ******************************/
//if(true) console.log("It return a single statement!"); // Single Statement.
//const c = 300;
//let b = 200;
//var a = 100;
/*if(true) { // Block/Compound Statement.
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);*/

// Illegal Shadowing.
// let z = 20;
// {
//     var z = 20;
// }

//Legal Shadowing.
// var z = 20;
// {
//     let z = 10;
// }

//Legal Shadowing.
// let z = 20;
// {
//     let z = 10;
// }
// console.log(z);

//Legal Shadowing.
// var z = 20;
// {
//     var z = 20;
// }

//Lexical Block Scope.
/*const a = 100;
var x = 500;
{
    var x = 600;
    console.log(x);
    const a = 200;
    {
        let a = 300;
        console.log(a);
    }
    console.log(a);
}
console.log(x);
console.log(a);*/

// function z() {
//     var a = 20;
// }
// console.log(a);
// z();

/****************************** EXECUTION PART 8 ******************************/
/*function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    //y();
    a = 20;
    return y;
}
var z = x();
console.log(z);
z();*/

/*function z() {
    var a = 10;
    function y() {
        var b = 20;
        function x() {
            // var a = 30;
            // var b = 40;
            console.log(a);
            console.log(b);
        }
        //x();
        //console.log(b);
        return x;
    }
    // var pqr = y();
    // console.log(a);
    // return pqr;
    //y();
    console.log(a);
    return y;
}
var xyz = z()();
console.log(xyz);
xyz();*/

// setTimeout Function with closure.
/*function x() {
    var i = 10;
    setTimeout(function () {
        console.log(i);
    }, 5000);
    console.log("setTimeout Function!")
}
x();*/

/*function y() {
    for(var i = 1; i <= 5; i++) { // Same memory space and value is reinitialized. Copy of the i is refer into the same memory location.
        setTimeout(function () {
            console.log(i);
        }, 5000); 
    }
    console.log("setTimeout Function!")
}
y();*/

/*function y() {
    for(let i = 1; i <= 5; i++) { // Different memory space/ Different copy execute. When loop execute it creates a new copy everytime.
        setTimeout(function () {
            console.log(i);
        }, 5000); 
    }
    console.log("setTimeout Function!")
}
y();

function z() {
    for(var i = 1; i <= 5; i++) { // Here it creates a different copy due to function also creates a new copy/memory space each time calling.
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, 5000);
        }
        close(i);
    }
}
z();*/

/****************************** EXECUTION PART 9 (CLOSURE) ******************************/
/*function outest() {
    var c = 20;
    function outer(b) { // Function Scope.
        //var a = 10;
        function inner() {
            console.log(a, b, c);
        }
        //var a = 10;
        let a = 10;
        //inner();
        return inner;
    }
    return outer;
}
let a = 100;
console.log(a);
outest()("Hello World")(); // () => inner function calling.

console.log(a);
if(true) { // If Scope.
    var x = 10;
    function b() {
        console.log(x);
    }
    b();
}
console.log(a);*/

/*function counter() {
    var count = 0; // Data Hiding because I am not able to access count variable outside of a function.
    function incrementCounter() {
        count++;
        console.log(count);
    }
    return incrementCounter;
}
counter()();
counter()();
var counter1 = counter();
counter1();
counter1();*/

/*function Counter() { // Constructor Function with two closure creating at a time.
    var count = 0;
    this.incrementCounter = function () { // Anonymous Function.
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
       count--;
       console.log(count); 
    }
}

var counter2 = new Counter();
counter2.incrementCounter();
counter2.decrementCounter();

var func = function b() {
    console.log("hi");
}
func();*/

/****************************** EXECUTION PART 10 ******************************/
// Function Statement.
//a();
//b(); // TypeError.
//c();
/*function a() {
    console.log("a is callled!");
}
//a();

// Function Expression.
var b = function () {
    console.log("b is called!");
}
b();*/

// Named Function Expressions.
// var c = function xyz() {
//     console.log(xyz);
//     console.log("c is called!");
// }
//c();
//xyz();

// First Class Function.
/*var d = function (func, message) {
    console.log("d is called!");
    console.log(func, message);
    console.log(message);
    return function () {
        console.log("Return Anonymous Function!");
    }
    // return function abc() {
    //     console.log("Return Function Statement!");  
    // }
}
// console.log(d(function () {
//     console.log("Anonymoous Function!")
// }, "Function is a heart of Javascript!"));
var pqr = d(function xyz() {
    console.log("Function Statement!");
});
pqr();*/

/****************************** EXECUTION PART 11 ******************************/
/*setTimeout(function xyz() {
    console.log("Timer!");
}, 1000);*/

/*function x(y) {
    console.log("x");
    console.log(y);
    return y;
}
x(function () {
    console.log("y");
});
//x("y");
console.log("CallBack Function!");/*

/*function cnt() { // Closures on Event Listeners.
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked!", ++count);
    });
}
cnt();

fetch("http://localhost:3000/").then(function () {
    console.log("Fetch Function!");
});*/

/****************************** EXECUTION PART 12 ******************************/
/*console.log("Start!");*/

/*setTimeout(function () {
    console.log("CallBack Functions with Five Thousands MilliSeconds!");
}, 5000);

setTimeout(function () {
    console.log("CallBack Functions with Zero MilliSeconds!");
}, 0);*/

/*console.log("End!");*/

/*let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While Expires!");*/

/****************************** EXECUTION PART 13 ******************************/
// Higher Order Functions.
/*function x() {
    console.log("x is called!");
}

function y(x) { // y is the Higher Order Functions.
    x(); // Callback Function
}

y(x);*/

/*const radius = [1, 4, 3, 5];*/

/*const areaOfCircle = function () {
    const output = [];
    for(let i = 0 ; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(areaOfCircle(radius));*/

/*const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(radius.map(area));
console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

Array.prototype.calculateone = function (logic) { // Polyfill for map functions.
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    // for(let i = 0; i < radius.length; i++) {
    //     output.push(logic(radius[i]));
    // }
    return output;
}
console.log(radius.map(area));
console.log(radius.calculateone(area));*/

/****************************** EXECUTION PART 14 ******************************/
// map, filter and reduce.
/*const arr = [5, 2, 1, 3, 5]; // Original Array.

const double = function (arr) { // Transformation function that iterates each element of an array.
    return arr * 2;
}

const triple = function (arr) {
    return arr * 3;
}

const binary = function (arr) {
    return arr.toString(2);
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);
console.log(output1); // Transformation Array/Resultant Array.
console.log(output2);
console.log(output3);

// Filter.
const arr1 = [3, 5, 9, 6, 8];

const isOdd = function (arr1) {
    return arr1 % 2;
}

const isEven = function (arr1) {
    return arr1 % 2 === 0;
}

const output4 = arr1.filter(isOdd);
//const output5 = arr1.filter(isEven);
const output5 = arr1.filter((arr1) => arr1 % 2 === 0);
console.log(output4);
console.log(output5);*/

// Sum of the Array element.
/*const arr2  = [5, 7, 4, 2, 8];

//function sum(arr2) {
    let sum = 0;
    for(let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    }
    console.log(sum);
//}
//console.log("The sum of the array element is: " + sum(arr2));*/

// Above example can be done using reduce function.
/*const output6 = arr2.reduce(function (acc, curr) { // acc => accumulator => which gives the single element value, curr => current value of an original array.
    acc = acc + curr;
    return acc;
}, 0);
console.log("The sum of the array element is: " + output6);

// Finding Maximum and Minimum value from the original array using reduce function.
const output7 = arr2.reduce(function(acc, curr) {
   if(curr < acc) {
    acc = curr;
   }
   return acc;
}, 8);
console.log(output7);*/

// More Examples.
/*const users = [
    {firstName: "Pooja", lastName: "Ganjage", age: "26"},
    {firstName: "Mohini", lastName: "Ganjage", age: "26"}
];*/

// Using map function.
/*const output8 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output8);

// Using reduce function.
//acc = {26: 2, 29: 1}
const output9 = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output9);*/

// Using filter function also and chaining of filter and map function also.
/*const output10 = users.filter((x) => {
   return x.age <= 26;
}).map((x1) => {
    return x1.firstName;
});
console.log(output10);

// Above example using reduce.
const output11 = users.reduce(function(acc, curr) {
    if(curr.age <= 26) {
       acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(output11);*/

/****************************** EXECUTION PART 15 ******************************/
//Prototype.
/*Array.prototype.arr = ["Pooja"];
const object = {
    name: "Pooja",
    city: "Pune",
    getIntro: function () {
        console.log(object.name + " " + object.city);
    }
}
object.getIntro();*/

/****************************** EXECUTION PART 16 ******************************/
// Polyfill for the bind() method.
/*let name = {
    firstname: "Pooja",
    lastname: "Ganjage"
}

let printName = (hometown, state, country) => { // Arrow function in class can access of this but not in function.
    console.log(name.firstname + " " + name.lastname + " " + hometown + " " + state + " " + country);
}*/

/*let printMyName1 = printName.bind(name, "Satara");
printMyName1("Maharashtra", "India");*/

/*Function.prototype.mybind = (...args) => {
    //let obj = this;
    let params = args.slice(1); // slice => First element remove and get the other elements.
    return (...args2) => {
        //printName.call(); // call() => it would not take an array as an argument because slice method returns an array only.
        //printName.apply(args[0], params); // apply() => it would take as an array argument.
        printName.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name, "Satara");
printMyName2("Maharashtra", "India");*/

/****************************** EXECUTION PART 17 ******************************/
// call, apply and bind method.
/*let name1 = {
    firstname: "Pooja",
    lastname: "Ganjage",
    // printFullName: function () {
    //     console.log(this.firstname + " " + this.lastname);
    // }
}
//name1.printFullName();

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
}
// Function Borrowing.
printFullName.call(name1, "Satara", "Maharashtra");

let name2 = {
    firstname: "Deepika",
    lastname: "Ganjage"
}
// Function Borrowing.
//name1.printFullName.call(name2);
printFullName.call(name2, "Satara", "Maharashtra");
printFullName.apply(name2, ["Satara", "Maharashtra"]);

let printName = printFullName.bind(name1, "Satara", "Maharashtra");
console.log(printName);
printName();*/

/****************************** EXECUTION PART 17 ******************************/
// Currying method.

/*let multiply = function (x, y) { // By using bind Method perform currying.
    console.log(x * y); 
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);*/

/*let multiply = function (x) { // By using closure perform currying.
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(5);*/

/****************************** EXECUTION PART 18 ******************************/
// Interview Programs.
// Question No.1
/*function printRepeating(arr , size) 
    {
        var i, j;
        console.log("Repeated Elements are :");
        for (i = 0; i < size - 1; i++) 
        {
            for (j = i + 1; j < size; j++) 
            {
                if (arr[i] === arr[j]) 
                console.log(arr[i] + " ");
            }
        }
    }
var arr = [4, 2, 4, 5, 2, 3, 1];
var arr_size = arr.length;
printRepeating(arr, arr_size);

// Question No.2
function firstNonRepeating(arr1, n) {
    let j, count = 1;
    console.log("Non-Repeated Elements are :");
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i != j && arr1[i] === arr1[j]) {
                break;
            }
        }
        if (j == n) {
            console.log(arr1[i]);
            ++count;
        }
    }
}
let arr1 = [9, 4, 9, 8, 6, 7, 4];
let n = arr1.length;
firstNonRepeating(arr1, n);

// Question No.3
const students = [ 
    {
      name: 'Pooja',
      age: 26,
      marks: 80
    },
    {
      name: 'Ankit',
      age: 25,
      marks: 90
    },
    {
      name: 'Pooja',
      age: 26,
      marks: 95
    }
];
const uniqueArr = [... new Set(students.map(data => { return data.name}))];
console.log(uniqueArr);

// Question No.4
let a = [1, 1, 2, 3, 3, 1];
let unique = a.filter(
    (item, i, ar) => ar.indexOf(item) === i
    );
console.log(unique);

// Question No.5
const b = [1, 1, 2, 3, 3, 1];
const result = Array.from(new Set(b));
console.log(result);

// Question No.6
const arrObj = [
    { 'name': 'Pooja', 'value': 150 },
    { 'name': 'Pooja', 'value': 150 },
    { 'name': 'Ankit', 'value': 200 },
    { 'name': 'Ankit', 'value': 450 }
];
const res = Array.from(arrObj.reduce(
  (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
), ([name, value]) => ({name, value}));
console.log(res);*/

/****************************** EXECUTION PART 19 ******************************/
// Object-Oriented Programming Langauge.
// Defining object
let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',
 
    //method
    getFunction : function () {
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

// Using a constructor
function Person(first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new instances of person object
let person1 = new Person('Mukul','Latiyan');
let person2 = new Person('Rahul','Avasthi');
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Object.create() example a
// simple object with some properties
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I
          studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);
// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';
// Inherited properties can be overwritten
me.isStudying = true;
me.printIntroduction();

// Defining class using es6
class Vehicle {
    static a = 10;
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(Vehicle.a);
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());

// Defining class in a Traditional Way.
function Vehicle1(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
};
 
Vehicle1.prototype.getDetails = function(){
    console.log('The name of the bike is '+ this.name);
}
let bike3 = new Vehicle1('Apache','TVS','1340cc');
let bike4 = new Vehicle1('Pulsar','Bajaj','998cc');
console.log(bike3.name);
console.log(bike4.maker);
bike3.getDetails();

class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    employeeId = (id) => {
        this.id = id;
        console.log(this.id);
    }

    address1() {
        function add1(address) {
            console.log(address);
        }

        var add2 = function (address1, address2) {
            console.log(address1);
            console.log(address2);
        }

        if (arguments.length === 1) {
            return add1(arguments[0]);
        } else if(arguments.length === 2) {
            return add2(arguments[0], arguments[1]);
        }
    }

    getDetails = () => {
        console.log(`${this.id} + " " + ${this.name}`);
        //console.log(`${this.name} + " " + ${this.address1} + " " + ${this.address2}`);
    }
}
let emp1 = new Employee(101, "Pooja");
emp1.employeeId(101);
emp1.address1("Pune");
emp1.address1("Pune", "Mumbai");
emp1.getDetails();

class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        console.log("hi");
        if (this.constructor == Shape) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    areaofRectangle() {
        console.log(this.length * this.width);
        throw new Error("Abstract Method must be implemented!");
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super(length, width);
        console.log("hello");
    }

    areaofRectangle() {
        console.log(this.length * this.width);
    }
}

//let shape1 = new Shape(1, 1);
let shape2 = new Rectangle(2, 2);
shape2.areaofRectangle();

// Creating a class "foo"
class foo {
 
    // Creating an overloadable method/function.
    overloadableFunction() {
 
        // Define two overloaded functions
        var function1 = function (arg1) {
            console.log("Function1 called with"
                    + " arguments : " + arg1);
            return arg1;
        };
 
        var function2 = function (arg1, arg2) {
            console.log("Function2 called with"
                    + " arguments : " + arg1
                    + " and " + arg2);
            return arg1 + arg2;
        };
 
        if (arguments.length === 2) {
            return function2(arguments[0],arguments[1]);
        }
    }
}
// Instantiate an object of the "foo" class
var object = new foo();
 
// Call the overloaded functions using the
// function overloadableFunction(...)
// We are passing 1 argument so executes function1
//console.log(object.overloadableFunction("Geeks"));
 
// We are passing two arguments so executes function2
console.log(object.overloadableFunction("Geeks", "for"));
 
function Customer(name) {
    this.name = name;
    if (this.constructor == Customer) {
        throw new Error("Abstract classes can't be instantiated.");
    }
}
Customer.prototype.display = function () {
    console.log(this.name);
    throw new Error("Abstract Method must be implemented!")
}
// let cust =  new Customer("Pooja");
// cust.display();
function User(uname) {
    this.uname = uname;
}
User.prototype = Object.create(Customer.prototype);
User.prototype.display = function () {
    console.log(this.uname);
}
let user = new User("Deepika");
user.display();

let object1 = {
    name: "Pooja"
}

let object2 = {
    city: "Pune"
}
object2.prototype = object1.prototype;
console.log(object2.city);
object2.__proto__ = object1;
console.log(object2.name);

var ConstructorFunction = function () {};
ConstructorFunction.prototype = {
    counter: 0,
    count: function () {
        return ++this.counter;
    }
};
var a = new ConstructorFunction();
var b = new ConstructorFunction();
console.log(a.hasOwnProperty("counter")); //false
console.log(a.count());
console.log(a.hasOwnProperty("counter")); //true

var car = function(color, speed) {
    this.color = color;
    this.speed = speed;
}
car.prototype.doors = 4;
var honda = new car('black', 'beep');
var kea = new car('black', 'meep');
console.log(kea.doors+' '+ honda.doors);
honda.doors = 2;
console.log('<br/>');
console.log(kea.doors+' '+ honda.doors);
car.prototype.doors = 4;
delete honda.doors;
console.log('<br/>');
console.log(kea.doors+' '+ honda.doors);
