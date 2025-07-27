//1. Function Statement/Definition

// function codeSubtle(){
//     console.log("Code Subtle is called");
// }
// codeSubtle()

// function add(a,b){
//     let add = a+b
//     console.log(add);
// }
// add(12,45)
// add(12, 35);
// add(12,42)
// add(143, 45);
// add(1464, 45);

// function calc(a,b){
//     let sum = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b
//     console.log(sum, sub, mul, div);
// }
// calc(12,4)

// function greet(name){
//     console.log(`Hello, ${name}`);
// }
// greet("VItthal")

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// let ans = (greet("Vitthal"));

// function add(a, f) {
//   let add = a + f;
//   return add;
// }

// let ans = add(23, 44);
// console.log(ans);

// vinayB(); // Can be called before declaration due to hoisting
// function vinayB() {
//   console.log("Vinay B.");
// }

// console.log(a);//undefined
// var a=20

// console.log(b);//reference error
// let b =20

// console.log(c);//reference error
// const c = 30

//2. Function Expression

// const multiply = function(a, b) {
//     return a * b;
// };

// console.log(multiply(5, 3)); // 15

// const vinay = function(name){
//     return (`Hello! ${name}`);
// }
// console.log(vinay("Vinay parit"))

//3. Arrow Function

// const akash = (name) => console.log(`Hello! ${name}`);

// akash("Akash Agasur")

//arrow function with 1 parameter
// const akash = name => console.log(`Hello! ${name}`);

// akash("Akash Agasur");

//arrow function with implicit return

// const akash = name => `Hello! ${name}`;

// console.log(akash("Akash Agasur"));

//Anonymous function

// function add(a){
//     console.log(a);
// }

// add(function(){
//     console.log("Hello! i'm a function");
// }) //callback function

// setTimeout(function(){
//     console.log("Hello! world");
// },1000)

// setInterval(function(){
//     console.log("this is setInterval");
// }, 1000)

// setTimeout(()=>{
//     console.log("Hello!");
// },1000)

// Rest Parameters

// function sum(...numbers) {
//     // let total = 0;
//     // for (let number of numbers) {
//     //   total += number;
//     // }
//     // return total;

//   return numbers;
// }

// console.log(sum(12, 23, 45, 6, 4, 6, 3, 43, 5, 76, 8));

// function greetAll(greeting, ...names) {
//   return names.map((name) => `${greeting}, ${name}!`);
// }

// console.log(greetAll("Hello", "Alice", "Bob", "Charlie"));

//Hoisting:
//only function definition is hoisted
// console.log(hoistedFunction());

// function hoistedFunction() {
//   return "I'm hoisted!";
// }

// console.log(a);
// var a =37

// Arrow function isn't hoisted
// let akash =()=>{
//     console.log("Hello! akash");
// }

//function expression isn't hoisted

// const multiply = function (a, b) {
//   return a * b;
// };

//IIFE - (Immediately Invoked Function Expression)
//private, global data se chechad nahi karne ke liye
// (function hello() {
//   console.log("Hello! code subtle");
// })();

// (() => {
//   console.log("test is running");
// })()

// let res= (function (a, b) {
//   return a + b;
// })(5, 3);

// console.log(res);

//Higher Order Functions

//1. taking function as an argument

// function add(a){
//     console.log(a);
// }
// add(function(){
//     console.log("Hey! I'm A");
// })

//2. returning a function

// function add(a,b){
//     return function(){
//         console.log(a+b);
//     }
// }

// let ans = add(12, 13);
// console.log(ans());

// Higher order function that returns a function
// function createMultiplier(multiplier) {
//     return function(num) {
//         return num * multiplier;
//     };
// }

// let double = createMultiplier(2);
// let triple = createMultiplier(3)
// console.log(double(5)); // 10
// console.log(triple(4)); // 12

// function abc(){
//     console.log(b);

//     return function(){
//         let b = 20
//     }
// }

// abc()
// let res = abc()
// res();

//callback function
//Callback functions are functions passed as arguments to other functions
// function abc(baap){
//     return baap
// }

// function pappa(){
//     console.log("Hi! nana");
// }

// let ans = abc(pappa)
// ans()

//First Class Function

//they can be treated like any other value: assigned to variables,
//passed as arguments, returned from functions

//global and local scope

//global scope
// let num = 20;

// function add() {
//   //local scope
//   let a = 20,
//     b = 30;
//   return function sum() {
//     return a + b;
//   };
// }

// let ans = add();
// console.log(ans());

// console.log(num);

// Q.2 Function Expression: Create a function expression called findPrimeNumbers that takes a number limit and returns an array of all prime numbers up to that limit using nested loops.


// const findPrimeNumbers = function (limit) {
//   let primes = [];

//   for (let i = 2; i <= limit; i++) {
//     let count = 0;

//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         count++;
//       }
//     }

//     if (count === 2) {
//       primes.push(i);
//     }
//   }

//   return primes;
// };

// console.log(findPrimeNumbers(10));  



//Q.5 Arrow Function with Implicit Return: Write an arrow function that takes an array of numbers and returns the count of numbers divisible by both 3 and 5 using filter and implicit return.

// let numbers= [9,12,10,15,20,25,30,]
// let divisible= numbers.filter(num => num % 3==0 && num % 5==0 )
// console.log(divisible);

// Q.8 IIFE: Create an IIFE that takes a number as parameter and prints all its divisors using a for loop, then immediately invoke it with the number 24.

//  (function(number){

//     for(let i = 1; i<number; i++ ){
//       if (number % i ==0) {
//         console.log(i);

//       }
//     }
// })(24)

// Q.11First Class Function: Store three mathematical operations (add, multiply, power) in an array as functions, then create a calculator that applies each operation to two numbers using loops to iterate through the operations.

// let arr =[
//     function add(a,b){
//        return a+b
//     },
//     function multi(a,b){
//         return a*b
//     },
//     function pow(a,b){
//         return Math.pow(a,b)
//     }
// ]

//     for (let i =0; i <arr.length; i++){
//         console.log(arr[i](2,4));
//  }

//Q.14 Global and Local Scope: Create a function scopeDemo with a local variable counter = 0 and a global variable totalProcessed = 0. The function should take an array of numbers, increment the local counter for each positive number, increment the global counter for each negative number, and return both counts using loops.

// let arr=[2,3,4,5,-4,-3,-2,-1]

// let totalProcessed = 0
// function scope(arr){
//     localcount = 0

//      for (let i = 0; i < arr.length; i++) {
//        if (arr[i] < 0) {
//          totalProcessed++;
//        } else {
//          localcount++;
//        }
//        console.log(i);
//      }
//     return [localcount, totalProcessed]
// }
// console.log(scope(arr));

// Q.17 Callback with Number Validation: Write a function validateAndProcess that takes an array of numbers and a callback function. Use a loop to check each number - if it's a 3-digit number, pass it to the callback; otherwise, skip it. The callback should determine if the number is palindromic.


// let arr = [121, 832, 656, 2, 0, 38, 127, 767];
// let arr1 = [];
// function validateAndProcess(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     let count = 0;
//     let digit;
//     while (arr[i] > 0) {
//       digit = arr[i] % 10;
//       count++;
//       arr[i] = Math.floor(arr[i] / 10);
//       if (count === 3) {
//         arr1.push(temp);
//       }
//     }
//   }
// }
// validateAndProcess(arr);
// console.log(arr1);

// function checkPalindrome(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 10 === Math.floor(arr1[i] / 100)) {
//       console.log("Palindrome", arr1[i]);
//     }
//   }
// }
// checkPalindrome(arr1);