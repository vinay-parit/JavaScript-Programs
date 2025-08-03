//object in javascript is real time data
//object declaration
// let info = {
//     name:"Vinay P",
//     age:20,
//     college:"SESCOM",
//     fn: function add(){
//         return (12+20);
//     },
//     arr:[1,2,3,4,5,6],
//     ud:undefined,
//     n:null,
//     smokes:false
// }

// console.log(info.smokes);

//accessing the object value
// console.log(info.fn());

// console.log(Math.random())

// let arr = [1,2,13,4,15,6,7]
// console.log(typeof arr);
// console.log(arr.length);
// console.log(arr.sort((a,b)=>(b-a)));

//ways for creating an object
// const book = new Object();
// book.title = "JavaScript Guide";
// book.author = "John Smith";
// book.pages = 350;
// book.published = true;
// console.log(book); // { title: "JavaScript Guide", author: "John Smith", pages: 350, published: true }

// console.log(book.title);

// const animal = Object.create(null);
// animal.species = "Dog";
// animal.breed = "Golden Retriever";
// animal.age = 3;
// animal.friendly = true;
// console.log(animal); // { species: "Dog", breed: "Golden Retriever", age: 3, friendly: true }

//Object Literal
// const person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   marks: [80, 90, 56, 85],
//   fun: (person) => {
//     console.log(`Hello! ${person}`);
//   },
// };
// person.mobile = 83838484;
// console.log(person);

// console.log(person.name);
// person.fun("vinay b");

// function abc(){
//     console.log("Hello from function");
// }
// abc()

// let kiran = [1,2,4,4,5,7]
// // console.log(typeof arr);
// // console.log(Array.isArray(person));

// console.log(kiran.length);
// kiran.push(8);
// console.log(kiran);

//2. Construction Function
// const book = new Object();
// console.log(book);
// book.title = "JavaScript Guide";
// book.author = "John Smith";
// book.pages = 350;
// book.published = true;
// console.log(book);
// console.log(book.title);

// { title: "JavaScript Guide", author: "John Smith", pages: 350, published: true }

//Object.create() -> Method
// const animal = Object.create(null);
// animal.species = "Dog";
// animal.breed = "Golden Retriever";
// animal.age = 3;
// animal.friendly = true;
// console.log(animal); // { species: "Dog", breed: "Golden Retriever", age: 3, friendly: true }

//dot notation vs bracet notation
// const employee = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   position: "Manager",
//   salary: 75000
// };

// console.log(employee.firstName); // "Sarah"
// console.log(employee.position); // "Manager"
// console.log(employee["salary"]); // 75000

// const college={
//     teacher:{
//         cs:{
//             name:"sunita rai",
//             dept:"cs"
//         },
//         IT:{
//             name:"jameet ghai",
//             dept:"IT"
//         }
//     },
//     students:{
//         name:"vitthal",
//         dept:"cs"
//     }
// }

// console.log(college["teacher"]["cs"]["name"]);

//Dynamic Property Access
// const settings = {
//   theme: "dark",
//   language: "english",
//   notifications: true
// };
// const propertyName = "theme";
// console.log(settings[propertyName]); // "dark"

// const keys = ["language", "notifications"];
// keys.forEach((key) => console.log(settings[key])); // "english", true

//Arrays forEach Method
// let arr=[2,4,5,4,32,24,5,3,2]
// arr.forEach((a, index)=>{console.log(a, index);
// })

//forEach(), map(), filter(), reduce()

// const smartphone = {
//   brand: "Apple",
//   model: "iPhone 14"
// };
// //Adding value of object
// smartphone.storage = "128GB";
// smartphone.color = "blue";
// smartphone["price"] = 799;
// //updating value of object
// smartphone.brand="nokia"
// console.log(smartphone); // { brand: "Apple", model: "iPhone 14", storage: "128GB", color: "blue", price: 799 }

//delete property of object
// const laptop = {
//   brand: "Dell",
//   processor: "Intel i7",
//   ram: "16GB",
//   storage: "512GB SSD",
//   price: 1299
// };
// delete laptop.price;
// delete laptop.storage;
// console.log(laptop); // { brand: "Dell", processor: "Intel i7", ram: "16GB" }

//Conditional chainning Deleting

// const gameCharacter = {
//   name: "Hero",
//   level: 15,
//   health: 100,
//   mana: 50,
//   temporaryBoost: true
// };
// if (gameCharacter.temporaryBoost) {
//   delete gameCharacter.temporaryBoost;
// }
// delete gameCharacter.mana;
// console.log(gameCharacter); // { name: "Hero", level: 15, health: 100 }

//Nested Objects
// const userProfile = {
//   personal: {
//     firstName: "Emma",
//     lastName: "Davis",
//     age: 28
//   },
//   address: {
//     street: "123 Main St",
//     city: "Portland",
//     zipCode: "97201"
//   },
//   preferences: {
//     theme: "dark",
//     language: "english"
//   }
// };
// console.log(userProfile.personal.firstName); // "Emma"
// console.log(userProfile.address.city); // "Portland"
// console.log(userProfile.preferences.theme); // "dark"

//Object Storage and Reference Types

// let vinay = {
//     name:"Vinay B.",
//     age:2389,
//     love:"riya",
//     func:()=>{}
// }

// let myname = vinay.name
// console.log(myname);//Vinay B.
// vinay.name="riya"
// console.log(vinay);
// console.log(myname);

//primitive
// let a = 5;
// let b = a;
// console.log(a, b);//5, 5
// b = b - 3;
// console.log(a, b);//5,2

//non-primitive (reference)
// let arr1 = [1, 2, 4, 5, 7];
// let arr2 = arr1;
// console.log(arr1, arr2);//[1,2,4,5,7]
// arr2[2] = 34;
// console.log(arr1, arr2);//arr1=[1,2,4,5,7], arr2=[1,2,34,5,7]

// function modifyUser(user) {
//   user.status = "active";
//   user.lastLogin = new Date();
// }
// const userData = {
//   username: "john_doe",
//   email: "john@example.com"
// };
// modifyUser(userData);
// console.log(userData); // { username: "john_doe", email: "john@example.com", status: "active", lastLogin: [current date] }

//Traversing Object Keys
// const scores = {
//   math: 95,
//   science: 87,
//   english: 92,
//   history: 89
// };
// //for-in loop
// for (let subject in scores) {
//   console.log(`${subject}: ${scores[subject]}`);
// }
// Output: math: 95, science: 87, english: 92, history: 89

//Example 2: Object.keys() Method

// const inventory = {
//   laptops: 15,
//   mice: 45,
//   keyboards: 23,
//   monitors: 8,
// };
// Object.keys(inventory).forEach((item) => {
//   console.log(`We have ${inventory[item]} ${item}`);
// });

//Example 3: Object.entries() Method
// const weather = {
//   temperature: 72,
//   humidity: 65,
//   windSpeed: 12,
//   pressure: 1013
// };
// Object.entries(weather).forEach(([m, v]) => {
//   console.log(`${m}: ${v}`);
// });
// Output: temperature: 72, humidity: 65, windSpeed: 12, pressure: 1013

//Example 1: Array with Object Properties
// const fruits = ["apple", "banana", "orange"];
// fruits.origin = "local farm";
// fruits.organic = true;
// fruits.season = "summer";
// console.log(fruits); // ["apple", "banana", "orange", origin: "local farm", organic: true, season: "summer"]
// console.log(fruits.length); // 3 (only counts indexed elements)
// console.log(fruits.origin); // "local farm"

// Example 2: Array Object Key Iteration

// const colors = ["red", "green", "blue"];
// colors.favorite = "purple";
// colors.total = 4;

// console.log(colors);

// for (let key in colors) {
//   console.log(`${key}: ${colors[key]}`);
// }
// // Output: 0: red, 1: green, 2: blue, favorite: purple, total: 4

// console.log(Object.keys(colors)); // ["0", "1", "2", "favorite", "total"]

// function getPropertyName(type)
// {
//   return `${type}Count`;
// }

// const statistics = {
//   [getPropertyName("visitor")]: 1250,
//   [getPropertyName("page")]: 45,
//   [getPropertyName("error")]: 3
// };
// console.log(statistics); // { visitorCount: 1250, pageCount: 45, errorCount: 3 }

//Spread Operator in Objects
// let arr = [1,23,4,5,66]
// let arr2 = arr
// let arr1=[...arr]
// console.log(arr, arr1);

// const basicInfo = {
//   name: "David",
//   age: 30,
// };
// const contactInfo = {
//   email: "david@example.com",
//   phone: "555-1234",
// };
// const preferences = {
//   theme: "dark",
//   notifications: true,
// };
// const completeProfile = {
//   ...basicInfo,
//   name2: "vinay",
//   ...contactInfo,
//   ...preferences,
// };
// console.log(completeProfile);
// { name: "David", age: 30, email: "david@example.com", phone: "555-1234", theme: "dark", notifications: true }


// const originalProduct = {
//   id: 1,
//   name: "Laptop",
//   price: 999,
//   category: "Electronics"
// };
// const discountedProduct = {
//   ...originalProduct,
//   price: 799,
//   onSale: true,
//   discount: "20% off"
// };
// console.log(discountedProduct); 
// { id: 1, name: "Laptop", price: 799, category: "Electronics", onSale: true, discount: "20% off" }

// const defaultSettings = {
//   volume: 50,
//   brightness: 75,
//   autoSave: true,
//   theme: "light"
// };
// const userSettings = {
//   volume: 80,
//   theme: "dark"
// };
// const finalSettings = { ...defaultSettings,...userSettings, lastUpdated: new Date() };
// console.log(finalSettings); 
// { volume: 80, brightness: 75, autoSave: true, theme: "dark", lastUpdated: [current date] }


//Object Destructring

// const student = {
//   name: "Lisa",
//   grade: "A",
//   subject: "Mathematics",
//   score: 95,
//   passed: true
// };
// const { passed } = student;
// console.log(name); // "Lisa"
// console.log(grade); // "A"
// console.log(score); // 95

// console.log(passed);
// console.log(student);


