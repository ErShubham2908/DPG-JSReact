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

// function Sum(num1, num2){
//     return num1 + num2
// }
// console.log("Line no 218",Sum(10, 20))  

// function calling
// let result1 = Sum();
// console.log("line 215, Sum Function")
// return "Abc"
// console.log(num1+num2);

//2.  Function Expression

// let result = function Multiply(){
//     console.log("Hi....");
//     return "hello"
//     console.log("Hi....");
// }

// result()
// console.log(result());

// Arrow Function

// let sum = (num1, num2) => num1+num2

// console.log(sum(1,2));

// Anonymous function
// setTimeout(function(){
//     console.log("Hiiiiiii.........");
// }, 1000);

// IIFE 
// (function(){

// })()

// callback function


// function sayHello(name){
//     console.log("Hello", name);
// }

// function callName(callback){
//     const username = "Abc";
//     callback(username)
// }

// callName(sayHello)
// sayHello("Abc")

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
//   const gen = numberGenerator();
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value)

// Array - one variable multi value - store data in index form

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);
// console.log(arr[6]); //7

// // Method of Array
// // 1. length

// // console.log(arr.length);

// // 2. Push - 
// arr.push(15)
// console.log("Push:",arr);

// // 3. Pop
// arr.pop();
// arr.pop();
// console.log("pop:",arr);


//4. Join
// let fruits = ["Apple", "Banana", "Mango"]; 
// console.log(fruits);

// let result = fruits.join(" - "); 
// console.log(result); // "Apple - Banana - Mango"

// 5. includes

// let colors = ["Red", "Green", "Blue"]; 
// console.log(colors.includes("Green")); // true 
// console.log(colors.includes("Purple")); // false

// 6. sort
// let array = [4,3,5,6,7,2,3];
// let arrC = ["Red", "Green", "Blue"]; 

// console.log(array.sort());
// console.log(arrC.sort());


// 7. fill 

// const arr = new Array(5);
// arr.fill("Abc")
// console.log(arr);
// arr[1] = "Pqr"
// console.log(arr);

// 8. Slice
// let fruits = ["Apple", "Banana", "Mango", 2,3, 4,5]; 
// console.log(fruits.slice(1, 7)); // ["Apple", "Banana"]
// console.log(fruits);

// 9. Splice 
// let fruits = ["Apple", "Banana", "Mango", "Graps" ]; 
// fruits.splice(3, 3, "Orange"); 
// console.log(fruits); // ["Apple", "Orange", "Mango"]

// 10. find
// let nums = [10, 30, 20]; 
// let found = nums.find(n => n > 15); 
// console.log(found);

// 11. indexOf
// let colors = ["Red", "Blue", "Green"]; 
// // console.log(colors.indexOf("Green"));//
// let data = colors.indexOf(2)
// console.log(data);
// if(data == 2){
//     colors[data] = "Pink"
// }

// console.log(colors);

// 12. Reverse
// let nums = [1, 2, 3];
//  nums.reverse(); 
//  console.log(nums)

// 13. shift - POP

// let items = [1, 2, 3]; 
// items.shift(); 
// console.log(items);
  
// // 14. unshift - Push
// items.unshift(1); 
// console.log(items);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum1 = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     sum1 =  sum1 + arr[i]
//     // arr[i] = arr[i] + 1;    
// }
// console.log(sum1);

// 15. map
// let result = arr.map((items)=> {
//     if(items % 2 === 0){
//         return items
//     }
// });
// console.log(result);

// 16. filter

// let nums = [1, 2, 3, 4]; 
// let even = nums.filter(n => n % 2 !== 0); 
// console.log(even); // [2, 4]
// console.log(nums);

//  17. Reduce

// let nums = [1, 2, 3, 4]; 
// let sum = nums.reduce((acc, curr) => acc + curr, 0); 
// console.log(sum);

// Object  -0 Way 1

// const Obj = {
//   name: "Abc",
//   age: 25
// }

// Way 2 using constructor

// const obj1 = new Object();

// 1. Value()
// let person = {
//   name: "Alice",
//   age: 25,
//   city: "New York"
// };
// console.log(Object.values(person)); // Alice 25 New York

// 2. keys

// console.log(Object.keys(person));

// assign

// let additionalInfo = { 
//   country: "IN", 
//   married: false 
// };
// let updatedPerson = Object.assign({}, person, additionalInfo);

// console.log("UpdatedPerson",updatedPerson);


// Math Method

// 1. Round()

// let number = 3.7
// console.log(Math.round(number));

// 2. Random

// let RandomNumber = Math.random() * 10;
// console.log(RandomNumber);

// floor

// console.log(Math.floor(3.9));

// ceil

// console.log(Math.ceil(3.3));

// pow - Power
// let num1 = 10;
// console.log(Math.pow(num1, 2 ));

// sqrt

// console.log(Math.sqrt(num1));


// JS Selector

// getElementById

// let para = document.getElementById("basic");
// para.style.color = "red"
// console.log(para);

// getElementsByClassName

// let head = document.getElementsByClassName('replaceOne')
// console.log(head);
// head[1].style.color = "red"
// head[3].style.fontSize = "32px"
// head[2].textContent = "Hey!!! How are you?"

// getElementsByTagName
// let tagNameData = document.getElementsByTagName('h1');
// console.log(tagNameData);

// querySelector & querySelectorAll
// let a = document.querySelector("#basic")
// let b = document.querySelector(".replaceOne")
// let c = document.querySelector("h1")

// console.log(a);
// console.log(b);
// console.log(c);

// 


// const input = document.getElementById("myInput");
// const output = document.getElementById("output");

// // Keydown: fires when the key is pressed down
// input.addEventListener("keydown", function (event) {
//   // output.innerHTML += `<p><strong>KeyDown:</strong> ${event.key}</p>`;
// });

// // Keypress: fires when a character-producing key is pressed (Deprecated)
// input.addEventListener("keypress", function (event) {
//   // output.innerHTML += `<p><strong>KeyPress:</strong> ${event.key}</p>`;
// });

// // Keyup: fires when the key is released
// let str = ""
// input.addEventListener("keyup", function (event) {
//   // console.log(event.key);
//   str += event.key
//   console.log(str);
  
  // output.innerHTML += `<p><strong>KeyUp:</strong> ${event.key}</p>`;
// });
let data = document.getElementById("myInput");
let para = document.getElementById("para")
let btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
  para.textContent = `${data.value}`
  console.log(data.value);
})