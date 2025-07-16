//while loop

//1. <<<<<<<<<<<<print 1 - 10 numbers>>>>>>>>>>>>>>>

// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//2.<<<<<<<<<<<<<< Print the Table>>>>>>>>>>>>>>>>

// let num =9
// let i= 1
// while (i<=10) {
//     console.log(num*i);
//     i++;
// }

// 3. <<<<<<<<<<Calculate sum of series: 1*2+2*3+3*4+.......+9*10>>>>>>>>>>>>>>>>>>

// let multi;
// let sum = 0;
// let i = 1;
// while (i < 10) {
//   multi = i * (i + 1);
//   sum = sum + multi;
//   console.log(sum);
//   i++;
// }

//4. <<<<<<<<<<<<Calculate sum of series: 1*2+3*4+5*6+......+11*12>>>>>>>>>>>>>>>>

// let multi
// let sum=0
// let i=1
// while (i<12){
//     multi=i*(i+1)
//     sum=sum+multi
//     console.log(sum);
//     i=i+2;
// }

// 5.<<<<<<<<<<<<<<<Calculate sum of series: 1*3+2*4+3*5+......+9*11>>>>>>>>>>>>>>>>>

// let multi;
// let sum = 0;
// let i = 1;
// while (i<11) {
//   multi = i * (i + 2);
//   sum = sum + multi;
//   console.log(sum);
//   i++;
// }

// 6. <<<<<<<<<<<<<<<Calculate sum of series: 1-2+3-4+5-6+.......+9-10>>>>>>>>>>>>>>>>>>

// let multi;
// let sum = 0;
// let i = 1;
// while (i < 10) {
//   multi = i - (i + 1);
//   sum = sum + multi;
//   console.log(sum);
//   i = i + 2;
// }

// 7. <<<<<<<<<<<<<<<<<<Find all Factors of a given number>>>>>>>>>>>>>>>>>>>

// Calculate the sum of positive numbers and sum of negative numbers from n inputs

// let psum = 0;
// let nsum = 0;
// let num = Number(prompt("how many number you want?"));
// let i = 1;
// let num2;
// while (i <= num) {
//   num2 = Number(prompt("Enter the Positive or Negative number"));
//   if (num2 >= 0) {
//     psum = psum + num2;
//   } else {
//     nsum = nsum + num2;
//   }
//   i++;
// }
// console.log(psum, "positive sum");
// console.log(nsum, "negative sum");

// =====Calculate the sum of positive numbers and sum of negative numbers until 0 encountered.===

// let psum = 0;
// let nsum = 0;
// let num2;
// while (true) {
//   num2 = Number(prompt("Enter the Positive or Negative number"));
//   if (num2 > 0) {
//     psum = psum + num2;
//   } else if (num2 === 0) {
//     break;
//   } else {
//     nsum = nsum + num2;
//   }
// }
// console.log(psum, "positive sum");
// console.log(nsum, "negative sum");

// =============Calculate the factorial of a number=============

// let num = Number(prompt("enter a number"));
// let multi = 1;
// while (num > 0) {
//   multi = multi * num;
//   num--;
// }
// console.log(multi);

// for (let i = 0; i < 5; i++) {
//   process.stdout.write("* ");
// }

// =================================================================
// let num = Number(prompt("Enter the number")); //45678
// let rem,
//   sum = 0,
//   sum2 = 0;
// while (num > 0) {
//   rem = num % 10;
//   sum = sum + rem;
//   num = Math.floor(num / 10);
// }
// console.log(sum);
// let newSum = sum;
// if (sum > 0) {
//   while (newSum > 0) {
//     rem = newSum % 10;
//     sum2 = sum2 + rem;
//     newSum = Math.floor(newSum / 10);
//   }
// }
// console.log(sum2);

//=========calculate the product of the middle digits of a number ->732876342=============

// let num = 54321;
// let newNum = Math.floor(num / 10);
// let rem,
//   mul = 1;
// //newNum = 5432
// while (newNum > 9) {
//   rem = newNum % 10;//2,//3,//4
//   mul = mul * rem;//2//6//24
//   newNum = Math.floor(newNum / 10);//543//54//5
// }

// console.log(mul);

// ================* Swapping 2 numbers**===========
//step1
// let num1= Number(prompt("take 1 input from the user"))
// let num2= Number(prompt("take  2 input from the user"))

// //step2
// let average=(num1 + num2)/2
// console.log('The average is',average);

// //step3
// if(num1>average){
//     let temp=num1
//     num1=num2
//     num2=temp
//     console.log('if statment',num1,num2);
// }
// else{
//     console.log('else statment',num1,num2);

// }

// =================Q.18 Check if a number is prime using divisor count.=============

// let number = Number(prompt("enter a number:"));
// let i = 1;
// let divisorCount = 0;

// while (i <= number) {
//   if (number % i === 0) {
//     divisorCount++;
//   }
//   i++;
// }
// console.log(divisorCount);

// if (divisorCount === 2) {
//   console.log(number, " is a prime number.");
// } else {
//   console.log(number, " is not a prime number.");
// }

// ======12. Convert digits of a number into words (e.g., 3754 → "Three seven five four").========

//3754
//4573 -  three seven five four
// let num = Number(prompt("Enter the number"));
// let digit, rev=0, rem;

// while (num > 0) {
//   digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(rev);
// //4573
// while(rev>0){
//     rem = rev%10;
//     switch (rem) {
//       case 1:
//         console.log("one");
//         break;
//       case 2:
//         console.log("two");
//         break;
//       case 3:
//         console.log("three");
//         break;
//       case 4:
//         console.log("four");
//         break;
//       case 5:
//         console.log("five");
//         break;
//       case 6:
//         console.log("six");
//         break;
//       case 7:
//         console.log("seven");
//         break;
//       case 8:
//         console.log("eight");
//         break;
//       case 9:
//         console.log("nine");
//         break;
//       default:
//         console.log("Error");
//         break;
//     }
//     rev = Math.floor(rev/10)
// }

//10. Check if a number is an ADAM number (square of number and square of reversed number are reverses).

// let num = 12
// let temp = num, digit1, digit2, rev1=0, rev2=0, sqr1, sqr2, num2
// sqr1 = num*num
// while(sqr1>0){
//     digit1 = sqr1%10
//     rev1 = rev1 *10 + digit1
//     sqr1 = Math.floor(sqr1/10)
// }
// console.log(rev1);
// num2 = Math.sqrt(rev1)
// console.log(num2);

// while (num2 > 0) {
//   digit2 = num2 % 10;
//   rev2 = rev2 * 10 + digit2;
//   num2 = Math.floor(num2 / 10);
// }
// console.log(rev2);
// console.log((num===rev2?"ADAM":"Not a ADAM"));










// ===================== galat wala adam number===================
// let num = 12;
// let digit,
//   rev = 0,
//   rev1 = 0,
//   temp,
//   sqr,
//   digit1;

// while (num > 0) {
//   digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// sqr = rev * rev;
// console.log(sqr);

// while (sqr > 0) {
//   // console.log(rem);
//   digit1 = sqr % 10;
//   rev1 = rev1 * 10 + digit1;
//   sqr = Math.floor(sqr / 10);
// }
// console.log(rev1);
// if (temp === rev1) {
//   console.log("adam number ");
// } else {
//   console.log("not");
// }
