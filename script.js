// Abc()
// console.log("Hii");


// Q. Difference between let, const and var
// scope

// var a = 10;
// var a  =20;


// let b = 30;
// b = 40;

// const c = 50;
// c = 60;

// console.log(c);





// console.log(a);
// console.log(b);


// var x = 10;
// var x = 15;
// function example() {
//     var x = 20;
//     console.log(x); // output: 20
// }
// console.log(x); // output:  15
// example();    

// hoisting


// console.log(a);
// let a = 20;
// console.log(a);

// 29th April 2025
// Datatype in JavaScript

// two type of Datatype

// 1. premitive Datatype
// 1. Number (-inf to inf)
// 2. string 'A' / "A" / `A` "12"
// 3. boolean - true / false
// 4. null - 
// 5. undefined
// 2. non-premitive Datatype
// 1. array

// let a = [1,2,3,4,5,6,7, "ABC", undefined]
// console.log(a);

// 2. object
// let obj = { name: "ABC", class: "Tech"}
// console.log(obj);

// 3. function
// function Abc(){
//     console.log("Session ongoing!!!");   
// }


// Operator in JS
// 1. Arithmetic 
// let a = 10;
// let b = 20;

// console.log(a + b);  // 30
// console.log(a - b);  // -10
// console.log(a * b);  // 200
// console.log(a / b); // .5 
// console.log(a % b); // 0
// Q1. Find a number is Even of Not?

// console.log(val % 2 == 0);

// 2. Assignment 
// 1. =
// 2. +=
// 3. -=
// 4. *=
// let q = 10
// let p = 10;

// p = p + q
// console.log(p); // 20

// p += q;
// console.log(p); // 30

//  Comparison 
// let m = 10;
// let n = "10";

// console.log(m == n);  // true only value
// console.log(m === n); // false value + datatype

// console.log(m != n); // false
// console.log(m > n);
// console.log(m < n);
// console.log(m <= n);
// console.log(m >= n);


// let p = true;
// let q = false;
// let r = true;

// console.log(p || q);  // true
// console.log(p && q); // false
// console.log(!p); // false


// // Ternary Operator
// let s = 19;

// let = p = s % 2 ===0 ? "Even" : "Odd";

// console.log(p);

// Conditions
// 1. if statements
// let time = 1.5;
// if(time < 1.15){
//     console.log("Present");
    
// }

// 2. if... else statements
// let time = 1;
// if(time < 1.15){
//     console.log("Present");
// }else{
//     console.log("Absent");   
// }
// 3. else if statements

// let math_marks = Number(prompt("Enter your math Marks..."));
// if(math_marks >= 90){
//     console.log("A+");
// }else if(math_marks >= 80 && math_marks < 90 ){
//     console.log("A");
// }else if(math_marks >= 70 && math_marks < 80){
//     console.log("B");
// }  else{
//     console.log("Fail");
// }

// 4. Switch statements

// let day = "Monday"

// switch (day) {
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         // break;
//     case "wednesday":
//         console.log("wednesday");
//         // break;
//     case "Friday":
//         console.log("Friday");
//         // break;
//     default:
//         console.log("Holiday");
//         // break;
// }


// Loop in JS


// for loop

// for (initialization; condition; increment) {
//     // code block to execute
// }

// for(let i = 1 ;  i <= 6 ; i++ ){
//     console.log(i);  
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// let college = "DPG Degree College";
// college = "Name"

// const name = "Abc"
// name = "PQR"

// console.log(college)
// console.log(name)


// Function and Type of function in JS


//1. function decleration

function Sum(num1, num2){
    return num1 + num2
}
console.log("Line no 218",Sum(10, 20))  

// function calling
// let result1 = Sum();
// console.log("line 215, Sum Function")
// return "Abc"
// console.log(num1+num2);

//2.  Function Expression

let result = function Multiply(){
    console.log("Hi....");
    return "hello"
    console.log("Hi....");
}

// result()
// console.log(result());

// Arrow Function

let sum = (num1, num2) => num1+num2

console.log(sum(1,2));

// Anonymous function
// setTimeout(function(){
//     console.log("Hiiiiiii.........");
// }, 1000);

// IIFE 
// (function(){

// })()

// callback function


function sayHello(name){
    console.log("Hello", name);
}

function callName(callback){
    const username = "Abc";
    callback(username)
}

callName(sayHello)
// sayHello("Abc")