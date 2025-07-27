//String
// let str = "Code Subtle"
// let str1 = 'Code Subtle'
// let str2 = `Code Subtle`

// console.log(str);

//when we want to convert a string into number then we add +, - before string
//It is only applicable on when string has number inside
// let num ='12'
// console.log(typeof num);

//when we add any value with string it becomes string
// let num = 12
// let str = "number"
// console.log(typeof (num + str));

//accessing the element with using length property of string
// let name = "Vinay begar"
// console.log(name[name.length-1]);

// let empty="";
// console.log(empty);

//CharAt()
// let str = "Hello, World!";
// console.log(str.charAt(0)); // 'H'
// console.log(str.charAt(7)); // 'W'
// console.log(str.charAt(str.length - 1)); // '!'

// console.log(str.charAt(13));//""
// console.log(str[13]);//undefined

//concat() Method
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "!";
// console.log(str1.concat(", ", str2, str3)); // "Hello, World!"
// console.log("".concat(str1, " ", str2)); // "Hello World"

//includes()
// let sentence = "The quick brown fox jumps over the lazy dog.";
// // console.log(sentence.includes("quick")); // true
// // console.log(sentence.includes("Quick")); // false (case-sensitive)
// console.log(sentence.includes("lazy", 30)); // true

// console.log(sentence.length);

//indexOf() Method
//Strating Index starts from 0
// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.indexOf("quick")); // 4
// console.log(sentence.indexOf("fox")); // 16
// console.log(sentence.indexOf("cat")); // -1

// let str = "Hello Hello Hello";
// let index = str.indexOf("Hello");
// console.log(index); //0
// console.log(str.indexOf("Hello", index + 7)); //12

//slice(start index, end index)

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.slice(4, 9)); // "quick"
// console.log(sentence.slice(16)); // "fox jumps over the lazy dog."
// console.log(sentence.slice(-9, -3)); // "lazy d"
// console.log(sentence.slice(-44));

//split(separator, limit) ->Array
// let sentence = "The quick brown fox jumps over the lazy dog.";

// console.log(sentence.split(" "));
// ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
// console.log(sentence.split(" ", 6));
// ["The", "quick", "brown"]
// console.log(sentence.split("o"));
// ["The quick br", "wn f", "x jumps ", "ver the lazy d", "g."]

// let str = "a,b,c,d,e";
// console.log(str.split(",", 3));

// let str = "Hello World";
// console.log(str.split("x"));

// let str1 = "Hello";
// let str2 = "HELLO";
// console.log(str1.toLowerCase() === str2.toLowerCase());

// let original = "JavaScript";
// let lower = original.toLowerCase();
// console.log(original); // What will this show?

// let mixed = "JaVaScRiPt";
// console.log(mixed.toUpperCase());
// console.log(mixed.toLowerCase());

//string.replace(searchValue, newValue)
//string.replaceAll(searchValue, newValue)

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.replace("fox", "cat"));
// // "The quick brown cat jumps over the lazy dog."
// console.log(sentence.replace(/dog/i, "elephant"));
// // "The quick brown fox jumps over the lazy elephant."
// console.log(sentence.replaceAll(" ", "-"));
// "The-quick-brown-fox-jumps-over-the-lazy-dog."

// let str = "cat and cat and cat";
// console.log(str.replace(/cat/g, "dog"));

// let str = "Hello World";
// console.log(
//   str.replace(/\w+/g, function (match) {
//     return match.toUpperCase();
//   })
// );

//startsWith && endsWith
// let originalString = "hello world";
// console.log(originalString.startsWith("hello")); // true
// console.log(originalString.endsWith("world")); // true
// console.log(originalString.startsWith("Hello")); // false (case-sensitive)

// let str = "JavaScript Programming";
// console.log(str.startsWith("Script", 4));

// let str = "Hello World";
// console.log(str.toLowerCase().startsWith("hello"));

// let fullname = "Vitthal korvan";

// Using for loop with bracket notation
// for (let i = 0; i < fullname.length; i++) {
//   console.log(fullname[i]);
// }

// Using for...of loop
// for (let char of fullname) {
//   console.log(char);
// }

// let str = "JavaScript"
// for (let i = str.length-1; i >= 0 ; i--) {
//     console.log(str[i]);
//     }

//ANAGRAM
// let str = "String";
// let str1 = "Trings";
// if (str.length !== str1.length) {
//   console.log("not a anagram");
// }
// console.log(str.toLowerCase().split("").sort().join());
// console.log(str1.toLowerCase().split("").sort().join());

// console.log(
//   str.toLowerCase().split("").sort().join("") ===
//     str1.toLowerCase().split("").sort().join("")
// );

// 2. Check whether a character is an alphabet or not
// Create a function that checks if a character is a letter (A-Z or a-z) or not.

// let char = "A"; // change this to test other characters

// if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
//   console.log(char + " is an alphabet.");
// } else {
//   console.log(char + " is NOT an alphabet.");
// }

// 5. Toggle each character in a string
// Convert uppercase letters to lowercase and lowercase letters to uppercase in a string.


// let name = "ViNaY";
// let toggled = "";

// for (let i = 0; i < name.length; i++) {
//   let char = name[i];
//   if (char >= 'A' && char <= 'Z') {
//     toggled += char.toLowerCase();
//   } 
//   else if (char >= 'a' && char <= 'z') {
//     toggled += char.toUpperCase();
//   }
// }

// console.log(toggled); 


// 8. Check if the given string is palindrome or not
// Determine whether a string reads the same forwards and backwards.

// function checkPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     console.log("It's a palindrome");
//   } else {
//     console.log("It's not a palindrome");
//   }
// }

// checkPalindrome("racecar");


// 11. Remove spaces from a string
// Create a function that removes all whitespace characters from a string.

// let input = "   Hello World   ";

// function removeSpaces(str) {
//   return str.trim();
// }

// console.log(removeSpaces(input));



// 14. Capitalize the first and last character of each word of a string
// Convert the first and last character of every word in a string to uppercase.

// let str = "hello world from javascript";
// let words = str.split(" ");
// let result = [];

// for (let word of words) {
//   if (word.length === 1) {
    
//     result.push(word.toUpperCase());
//   } else {
//     let first = word[0].toUpperCase();
//     let last = word[word.length - 1].toUpperCase();
//     let middle = word.slice(1, -1);
//     result.push(first + middle + last);
//   }
// }

// let finalStr = result.join(" ");
// console.log(finalStr); 
