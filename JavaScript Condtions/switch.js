// //Take input as a number from user between 1-7 and display the day according to number
//
// let dayNumber = Number(prompt("Check the day:"));

// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("day not matching");
// }

// let marks = Number(prompt("enter a marks:"));

// switch (true) {
//   case marks >= 90:
//     console.log("grade A");
//     break;
//   case marks >= 70:
//     console.log("grade B");
//     break;
//   case marks >= 50:
//     console.log("grade C");
//     break;
//   case marks >= 35:
//     console.log("grade D");
//     break;
//   default:
//     console.log("fail");
// }

//============ Q.4 Calculate areas of different geometric shapes based on figure code.========
//circle - 3.14*r*r
//rectangle - l*w
//square - s*s
// triangle - ½ (b × h)

// let shape = prompt("enter which shape");
// let area, l, b, h, r, s;
// switch (shape) {
//   case "C":
//   case "c":
//      r = Number(prompt("enter the value"));
//     area = 3.14 * r * r;
//     console.log("area of the Circle", area);
//     break;

//   case "R":
//   case "r":
//      l = Number(prompt("enter the length"));
//      b = Number(prompt("enter the breadth"));
//     area = l * b;
//     console.log("area of rectangle", area);
//     break;

//   case "s":
//   case "S":
//      s = Number(prompt("enter the side"));
//     area = s * s;
//     console.log("area of square", area);
//     break;

//     case "t":
//         case "T":
//      b = Number(prompt("enter the breadth"));
//      h = Number(prompt("enter the height"));
//     area = (1/2 * (b * h))
//     console.log("area of triangle", area);
//     break;

//     default:
//         console.log("you entered wrong input");
//         break;

// }

// ======Q.8 Calculate the total cost of an order based on item count and type-specific costs.========

// let order = prompt("whats you want")
// let item_cost, total_cost

// switch (order) {
//   case "P":
//   case "p":
//     p = Number(prompt("how many pizzas"));
//     item_cost = 100;
//     item_cost = item_cost * p;
//     console.log(item_cost);
//     break;

//   case "B":
//   case "b":
//     b = Number(prompt("how many pizzas"));
//     item_cost = 50;
//     item_cost = item_cost * b;
//     console.log(item_cost);
//     break;

//   case "F":
//   case "f":
//     f = Number(prompt("how many pizzas"));
//     item_cost = 80;
//     item_cost = item_cost * f;
//     console.log(item_cost);
//     break;

//     default:
//           console.log("you entered wrong input");
//           break;
// }

// Q.11 Create a menu-driven program to:
//     - Check if a number is composite
//     - Find the smallest digit in an integer

// let choise = Number(prompt("choose a case"));

// switch (choise) {
//   case 1:
//     let num = Number(prompt("enter the number"));
//     let factors;
//     for (let i = 2; i <= num; i++) {
//       if (num % i == 0) {
//         factors = i;
//       } else if (factors >= 2) {
//         console.log("its a composite number", factors);
//       } else {
//         console.log("its not a composite number");
//       }
//     }
//   case 2:
//     let num2 = Number(prompt("Enter the number"))
//     let digit, small=num2%10
//     while(num2>0){
//       digit = num2%10
//       if (digit<=small) {
//         small = digit
//       }
//       num2 = Math.floor(num2/10)
//     }
//     console.log(small);
    
// }
