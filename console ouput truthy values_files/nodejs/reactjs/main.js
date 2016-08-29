main.js
Details
Activity
EARLIER THIS WEEK
k
karthik krishnam raju kallepalliuploaded an item
Sun 9:33 PM
Javascript
main.js
No recorded activity before August 21, 2016


import Person from './Person';
import Student from './Student';
console.log('ES2015 practice');

/*if(false) {
	var a = 20; 
}*/
/*function func1() {
	var a=20;
}
func1();*/

/*var a = 20;

if(true) {
	var a=40;
}*/

let a=30;
if(true) {
	let a = 50;
}
console.log(a); //error (not defined) or undefined (declared but not assigned a value);

const pi= 3.14;
console.log(pi);


/*var sum = function(a,b) {
	return a+b;
}*/

var sum = (a,b) => a+b;

var printMessage = message => console.log(message);

printMessage("Hello World!!");
console.log("2+3 = " ,sum(2,3));

let firstName = "Java";
let lastName = "Script";

/*let person = {
	firstName : firstName,
	lastName : lastName
}*/
let person = {
	firstName,
	lastName
}
console.log(person);

function greeting (message, name = "jhon") {
	console.log(message + name);
}

greeting("Hello ", "bob");

var arr = ["How", "are", "you", "doing"];

console.log(...arr);
var arr = [1,2,3];
var arr2 = [4,5,6];
function printThreeValues(a,b,c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
printThreeValues(...arr);

function addition(param1, ...items)  {

	console.log(items);
	//return a+b+c+d;
}

addition(1,2,3,4)

/*function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.getName = function() {
	return this.name;
};
Person.prototype.setName = function(name) {
	this.name = name
}
Person.prototype.getAge = function() {
	return this.age;
};
Person.prototype.setAge = function(age) {
	this.age = age
}*/

var arr = ['Jhon', 25, 1]
var stu1 = new Student(...arr);
console.log(stu1);
