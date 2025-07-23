//what is array
//non-primitive :

// Object: The base for all complex data structures (e.g., { name: "John" }).
// Array: Ordered collections of values (e.g., [1, 2, 3]).
// Function: Callable objects that execute a block of code.

//primitive :

//String: Represents textual data (e.g., "hello").
// Number: Represents numeric values (e.g., 10, 3.14).
// Boolean: Represents logical values (true or false).
// Undefined: Represents a variable that has been declared but not yet assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol: Represents a unique identifier.
// BigInt: Represents whole numbers larger than 2^53 - 1.

// let a = 20;
// let b = a;
// console.log(a, b); //20,20

// b = a + 10;
// console.log(a, b); //20,30

// let arr1 = [10, 20, 30];
// let arr2 = arr1;
// console.log(arr1, arr2);

// arr2[1] = 80;
// console.log(arr1, arr2); //10,20,30
// //10,80,30

// arr1[0] = 100;

// console.log(arr1, arr2);

// // arrays -> collection of hetrogenous data

// let arr = [
//   10,
//   "Vitthal",
//   4.5,
//   true,
//   [1, 2, 3],
//   function () {},
//   { username: "vitthal" },
//   undefined,
//   null,
//   false
// ];
// console.log(arr);

//Second way for creating an array:
// arr -> variable name
// new -> keyword
// Array -> actaully array
//(5) -> length of an array
// let arr = new Array(5)
// arr[0]=12
// arr[3] =94
// arr.push(9)
// arr.push(8)
// arr.push(27)
// console.log(arr);//(8) [12, empty × 2, 94, empty, 9, 8, 27]

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[arr.length-1]);

// let obj = { username: "Vitthal" };
// console.log(Array.isArray(arr));
// console.log(typeof arr);//object
// console.log(arr.length);

//arr.length is property to find the length of an array
//Math.random()
//method -> object ke andar ka function
//function -> user defined non-primitive data type
//property -> object ke andar ka property
// arr.length

//for loop in array
// let arr = [10,20,38,3,4,5,6,4,34]
// template literals
// for (let i = 0; i < arr.length; i++) {
// console.log(`the vale of array: ${arr[i]} the index is ${i}`);
// }

// let a = 5;
// let b = a; // Value is copied
// b++;
// console.log(a); // 5 (unchanged)
// console.log(b); // 6 (changed)

//arrays methods
//push -> adding an element in the end of an array
// let names = ["akash", "vinay b.", "vinay p."];

// names.push("vitthal")
// names.push("vishal");
// names.push("arti");
// names.push("seema");
// names.push("aaradhya");
// names.push("vishnu");
// console.log(names);

//pop-> removing an element from the last index of an array
// names.pop()
// names.pop();
// console.log(names);

//unshift -> adding an element from 0th index
// names.unshift("Vitthal")
// console.log(names);

//shift -> removes an element from the start

// names.shift()
// names.shift();

// console.log(names);

// let fruits = ["apple", "banana"];
// let newLength = fruits.push("cherry", "date");
// console.log(fruits); // ["apple", "banana", "cherry", "date"]
// console.log(newLength); // 4

//reference an array
// let a = [28, 324, 5, 34];
// let b = a;
// b.push(348)
// console.log(a,b);

//cloning an array
//slice() -> naya array banata hai. array ka refence nhi dega
// let original = [1, 2, 3];
// let cloned = original.slice();
// console.log(original);
// // console.log(cloned);

// cloned.push(5)
// console.log(cloned);

//spread operator
// let c = [1, 3, 34, 44, 45, 2, 55, 6];
// let e = ["akash", "vinay p", "Vinay B."];
// let d = [...c, ...e];
// console.log(c, e, d);

//For of loop and for in loop
//1. arrays, 2. strings, 3. objects

//for of loop:
// let numbers = [10, 20, 30, 40];

// for (let number of numbers) {
//   console.log(number * 2); // 20, 40, 60, 80
// }

// let fruits = ["apple", "banana", "cherry", "date"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let str = "Vitthal"
// for(let s of str){
//     console.log(s);
// }

//for in loop:
// let fruits = ["apple", "banana", "cherry", "date"];

// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

//splice() -> IT changes the value of original array

// let numbers = [1, 2, 3, 4, 5];

// Remove elements
// let removed = numbers.splice(3, 2); // Remove 2 elements starting from index 2
// console.log(removed);
// console.log(numbers);

// Add elements
// let fruits = ["apple", "cherry"];
// fruits.splice(1, 0, "banana"); // Add "banana" at index 1
// console.log(fruits); // ["apple", "banana", "cherry"]

// Replace elements
// let colors = ["red", "green", "blue"];
// colors.splice(2, 1, "yellow", "orange"); // Replace "green" with "yellow" and "orange"
// console.log(colors); // ["red", "yellow", "orange", "blue"]

//sort() -> mainly used to sort an array
// let fruits = ["grapes","banana", "apple", "cherry"];
// console.log(fruits.sort());

// let numbers = [10, 100, 1, 3, 4, 5, 45, 56, 65, 40];
// console.log(numbers.sort((a, b) => a - b));//ascending order
// console.log(numbers.sort((a, b) => b - a));//descending order

//Reverse()

// let rev = [2,2,3,43,454,5,56,56,54,43]
// console.log(rev.reverse());

//Q. 1  Sum of Array's Elements
// let arr = [1, 21, 23, 4, 5, 6, 17, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   console.log(sum);
// }

// let sum =0
// for(let a of arr){
//     sum += a
//     console.log(sum);
// }

// let sum =0
// for(let a in arr){
//     sum = sum +arr[a];
//     console.log(sum);
// }

//Q. 2 Max Element from Array
// let arr = [
//   26, 57, 13, 91, 49, 72, 38, 63, 41, 4, 15, 95, 60, 44, 98, 36, 74, 5, 8, 22,
//   70, 39, 68, 97, 3, 64, 46, 87, 59, 66, 50, 93, 21, 42, 6, 80, 99, 14, 85, 35,
//   12, 7, 100, 62, 33, 1, 75, 19, 47, 43, 84, 89, 31, 10, 55, 77, 48, 53, 2, 76,
//   37, 25, 18, 32, 28, 90, 92, 51, 11, 17, 16, 24, 45, 61, 34, 40, 73, 86, 65, 9,
//   30, 71, 29, 27, 94, 20, 52, 83, 23, 96, 67, 56, 78, 58, 69, 88, 81, 82, 79,
//   54,
// ];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i]>max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// //Finding a minimum element
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// Accessor Methods (Do Not Modify Original Array)
// concat()

// let nums = [1,2,3,4,4]
// let str = ["Akash", "vinay p.","vinay B."]

// let mix = nums.concat(str)
// console.log(mix);
// console.log(nums, str);

// let  str = "Code"
// console.log(str.concat(" Subtle"));

// slice()
// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// let citrus = fruits.slice(1, 5);
// console.log(citrus); // ['banana', 'cherry', 'date']
// console.log(fruits);

//indexof()
// let fruits = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "orange",
//   "vinay b.",
//   "elderberry",
// ];
// // console.log(fruits.indexOf("vinay p."));

// //find if orange is in array or not
// if (fruits.indexOf("orange") === -1) {
//   console.log("orange is not present in an array");
// } else {
//   console.log("orange is present at position", fruits.indexOf("orange"));
// }

//lastIndexOf()

// let arr = [1,2,4,,,,,,,2,2]

// console.log(arr.lastIndexOf(2));
// console.log(arr[5]);

//Includes()

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('grape')); // false

// let numbers = [1, 2, 3, NaN, 5];
// // console.log(numbers.includes(NaN));
// console.log(numbers.indexOf(NaN));

//join()
// let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits);

// console.log(fruits.join()); // "apple,banana,cherry"
// console.log(fruits.join(' - ')); // "apple - banana - cherry"
// console.log(fruits.join('')); // "applebananacherry"

// let words = ['Hello', 'World', '!'];
// let sentence = words.join(' ');
// console.log(sentence); // "Hello World !"

//foreach()

// let arr = [1, 34, 34, 21, 3, 34, 4, 5, 5, 3];

// arr.forEach((elem) => console.log(elem * 2));

// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit.toUpperCase()}`);
// });

//map()
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function(num){
//     return num *2
// });
// console.log(doubled);
// console.log(numbers);
// let arr2=[]
// let arr = [10, 20, 30, 40, 50, 60];
// arr2 = arr.map(function(n){
//     return n*3
// });
// //let arr3 = arr.map(n=>n*3)
// console.log(arr2);

//calling a function
// function abc(){
//     return function bc(){
//         return function c(){
//             console.log("Hello from c");
//         }
//     }
// }
// let bc = abc()
// let c =bc();
// let d = c();

// let users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Bob", age: 35 },
// ];

// let names = users.map((user, index) => `${index}: ${user.name}`);
// console.log(names);

// let prices = [10.6, 25.99, 5.75];
// let formattedPrices = prices.map(price => `$${price.toFixed(1)}`);
// console.log(formattedPrices); // ['$10.50', '$25.99', '$5.75']

//filter() ->filter karta hai
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = numbers.filter(function(num){
//     if (num>11) {
//         return num
//     }
// })
// console.log(evenNumber);

// let words = ["apple", "banana", "cherry", "date"];

// let longWords = words.filter((word) => word.length > 5);
// console.log(longWords);

//jabhi bhi pura array ke itna value chahiye toh map function
//jabhi bhi condition ke hisaab se value chahiye toh filter
//jabhi pura array se sirf 1 value chahiye toh reduce
//reduce()
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// let max = numbers.reduce((acc, num) => (num > acc ? num : acc));
// console.log(max);

// ======================   Q.2 Max Element from Array
// Brief: Find the largest element in an array. Detailed: Write a program to find the maximum element in an array. Compare each element with the current maximum and update it if a larger element is found. Example: Input: [3, 7, 1, 9, 2] → Output: 9 ====================

// let arr= [3,7,1,8,9]

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

//3. Second Max Element from Array
// Brief: Find the second largest element in an array. Detailed: Write a program to find the second maximum element in an array. Keep track of both maximum and second maximum values while traversing the array. Handle cases where all elements are same or array has duplicates. Example: Input: [3, 7, 1, 9, 2] → Output: 7

// let arr = [20,30,60,7,4,90]
// let max = arr[0], secondMax = arr[1]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]>max) {
//         secondMax = max;
//         max=arr[i]
//     }
// }
// console.log(max, secondMax);

//4. Reverse the Array (Using Another Empty Array)
// Brief: Reverse an array using additional space. Detailed: Create a new empty array and copy elements from the original array in reverse order. Start from the last index of original array and place elements at the beginning of new array. Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]

// let arr=[1,2,3,4,5]
// let arr2=[]
// for(let i = arr.length-1;i>=0;i--){
//     arr2.push(arr[i])
// }
// console.log(arr2);

// ================Q.5 Reverse the Array (Without Using Another Empty Array)
// Brief: Reverse an array in-place without extra space. Detailed: Swap elements from both ends of the array moving towards the center. Use two pointers - one at start and one at end, swap elements and move pointers towards each other until they meet. Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1] ===============================

// let arr = [1, 2, 3, 4, 5, 6];
// let i = 0;
// let j = arr.length - 1;

// let temp;
// for (; i < j; ) {
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

//6. All Zeroes to Left and All Ones to Right
// Brief: Segregate 0s and 1s in a binary array. Detailed: Rearrange an array containing only 0s and 1s such that all 0s appear before all 1s. Use two-pointer technique or counting approach to separate them efficiently. Example: Input: [1, 0, 1, 0, 1, 0] → Output: [0, 0, 0, 1, 1, 1]

// let arr=[1,0,1,0,1,0]
// let i=0, j=0

// for(;i<arr.length;){
//     if (arr[i]==0){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr);

// ==================== Q.8 Array Right Rotation by 1
// Brief: Rotate array right by one position. Detailed: Move each element one position to the right and place the last element at the first position. Store the last element temporarily, shift all other elements right by one position, then place the stored element at the beginning. Example: Input: [1, 2, 3, 4, 5] → Output: [5, 1, 2, 3, 4] ============================

// let arr = [1, 2, 3, 4, 5, 6];
// // let i = 0;
// // let j = arr.length - 1;
// let last = arr.pop(arr.length-1)
//      arr.unshift(last)
//     console.log(arr);
// console.log(last);

// 11. Array Left Rotation by K Elements (Using Another Array)
// Brief: Rotate array left by K positions using extra space. Detailed: Create a new array and place elements in their rotated positions. Elements from index K to end go to beginning of new array, and elements from start to K-1 go to the end of new array. Example: Input: [1, 2, 3, 4, 5], K=2 → Output: [3, 4, 5, 1, 2]

// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// function leftRotate(arr, k) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[(i + k) % arr.length];
//   }

//   return result;
// }

// console.log(leftRotate(arr, k));



// 17. Find Smallest and Largest Element in an Array
// Brief: Find both minimum and maximum elements in single traversal. Detailed: Traverse the array once and maintain both minimum and maximum values. Compare each element with current min and max values and update accordingly. This reduces the number of comparisons compared to finding them separately. Example: Input: [3, 7, 1, 9, 2] → Output: Min=1, Max=9

// let arr = [3, 7, 1, 9, 2];

// function findMinMax(arr) {

//     let max = arr[0];
//     let min = arr[0];

    
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       } else if (arr[i] > max) {
//         max = arr[i];
//       }
//     }


// }
// console.log(max,min);

 
   
