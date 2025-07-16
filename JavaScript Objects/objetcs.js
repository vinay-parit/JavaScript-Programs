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

const animal = Object.create(null);
animal.species = "Dog";
animal.breed = "Golden Retriever";
animal.age = 3;
animal.friendly = true;
console.log(animal); // { species: "Dog", breed: "Golden Retriever", age: 3, friendly: true }
