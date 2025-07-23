//Q.19 Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function first(Callback){
//     setTimeout(Callback,3000)
// }

// first(()=>{
//     console.log("This is Argument function");
// })

// setTimeout(() => {
//   console.log("This is set Timeout");
// }, 3000);

// setInterval(()=>{
//     console.log("This is setInterval");

// },2000)

//Q.23 Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function second(Callback) {
//   setInterval(Callback, 2000);
// }

// second(() => {
//   console.log("executes it after every 2 seconds");
// });

// Q.20 Implement your version of `.map()` as a higher-order function.

// function ownMap(arr, callback) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(callback(arr[i]));
//   }
//   return arr1;
// }
// let arr = [1, 2, 3, 4];
// console.log(ownMap(arr, (num) => num * num));

//Q. 21 Write a function that uses closures to create a counter.
// function counter() {
//   let count = 0;
//   return function internalCounter() {
//     return ++count;
//   };
// }
// let ans = counter()

// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());

// let ans2 = counter();
// console.log(ans2());


//Q. 22 Implement a function that limits how many times another function can be called (Closure + HOF)

function limiter(){

}

limiter()