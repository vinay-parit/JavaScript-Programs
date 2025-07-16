// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Q2.Create a do-while loop that asks the user to enter a
// password until they enter "javascript123".
// Display appropriate messages for incorrect attempts.

// let password;

// do {
//   password = prompt("Enter your password:");

//   if (password !== "javascript123") {
//     console.log("Incorrect password. Please try again.");
//   }
// } while (password !== "javascript123");

// console.log("Access granted!");

// Q. 5 Write a do-while loop that reverses a given string character by character
// and displays the process.

// do {
//   let str = "Akash";
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
//   }
//   console.log(rev);
// } while (str.length > 0);

// Q.8 Create a do-while loop that validates user input for age
// (must be between 18-65) and keeps asking until valid input is provided.

// let age;
// do {
//   age = Number(prompt("Enter your age (18 - 65):"));

//   if (age > 17 && age < 66) {
//     console.log("Valid age entered:", age);
//     break;
//   } else {
//     console.log("InValid age entered try again");
//   }
// } while (age > 17 && age < 66);

// Q.4 Create a do-while loop that generates and displays random numbers between 1-50 until a number greater than 45 is generated.
// let random;
// do {
//   random = Math.floor(Math.random() * 50) + 1;
//   console.log(random);
// } while (random < 45);
