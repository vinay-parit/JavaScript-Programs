// let prompt = require("prompt-sync")();

// let n = prompt("enter the number ");
// console.log(n);

/*

*****
*****
*****
*****
*****

*/
//console.log("*") -> /n -> go to the nest line
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// console.log();
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");
// process.stdout.write(" * ");

//WET ---> write everything twice, trice
//DRY ---> Do not repeat

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }
// console.log();

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write(" * ");
// }

/*

 *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  *  *
 *  *  *  *  *

*/

// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=5; j++){
//         process.stdout.write(" * ");
//     }
//     console.log();
// }

/*

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5


*/

// for (let i = 1; i <=5; i++) {
//     for (let j = 1; j <=5; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();
// }

/*

1 1 1 1 1 
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(i+" ");
//   }
//   console.log();
// }
/*
5 4 3 2 1 
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
*/

// for (let i = 1; i <= 5; i++) {
//   for (let j =5 ; j > 0; j--) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }
/*
5 5 5 5 5 
4 4 4 4 4
3 3 3 3 3
2 2 2 2 2
1 1 1 1 1
*/

// for (let i = 5; i >0; i--) {
//   for (let j = 5; j > 0; j--) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }

/*

*
* *
* * *
* * * *
* * * * *


*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <=  i; j++) {
//     process.stdout.write( " * ");
//   }
//   console.log();
// }

/*

1  
2  2
3  3  3
4  4  4  4
5  5  5  5  5

*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i+"  ");
//   }
//   console.log();
// }

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + "  ");
//   }
//   console.log();
// }

/*

AAAAA
BBBBB
CCCCC
DDDDD
EEEEE


*/

// for (let i = 65; i <= 69; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(i));
//   }
//   console.log();
// }

/*

ABCDE
ABCDE
ABCDE
ABCDE
ABCDE


*/

// for (let i = 1; i <= 5; i++) {
//   for (let j = 65; j <= 69; j++) {
//     process.stdout.write(String.fromCharCode(j));
//   }
//   console.log();
// }

// console.log(String.fromCharCode(97));
// console.log(String.fromCharCode(48));

// Question 11:
// A
// A B
// A B C
// A B C D
// A B C D E

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) +" ");
//   }
//   console.log();
// }

// Question 14:
//     *
//    **
//   ***
//  ****
// *****

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 17:
//     A
//    BB
//   CCC
//  DDDD
// EEEEE

// for (let i = 1; i <= 5; i++) {
//   for (let k = 5; k > i; k--) {
//         process.stdout.write(" ");
//       }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64+i));
//   }
//   console.log();
// }

// Question 20:

//
//  1
// 22
// 333
// 4444;
//55555;




// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i+"");
//   }
//   console.log();
// }
