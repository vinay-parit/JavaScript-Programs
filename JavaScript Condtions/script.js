// let num = 90
// if(num>18){
//     console.log("ticket is allowed");
// }
// else{
//     console.log("ticket is not allowed");
// }

// let age = 28;
// let hasLicense = true;
// let notdrunk = true;
// if (age >= 18 && hasLicense && notdrunk) {
//   console.log("Can drive");
// }
// else{
//     console.log("cannot drive");
// }

// Positive or Negative
// let num = -9
// if(num>=0){
//     console.log("positive");
// }
// else{
//     console.log("negative");
// }

//Even or odd

// let num = 5
// if(num%2==0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }

// If-else ladder -- else-if
// let age = 19
// if (age>18) {
//     console.log("You can drive sir");
// }
// else if(age === 18){
//     console.log("driving license bana ke la");
// }
// else{
//     console.log("nikal...");
// }

//

// ===================== Nested If Else ================================

// 4. Check if a number is divisible by 5. If not, print the nearest number that is.

// let number = Number (prompt("enter the number"))
// if (number % 5 === 0) {
//   console.log(number, " is divisible by 5.");
// }
// else {
//   if (number % 5 < 3) {
//     let nearest = number - (number % 5);
//     console.log(number ," is not divisible by 5.");
//     console.log("Nearest number divisible by 5 is: " , nearest);
//   }
//   else {
//     let nearest = number + (5 - (number % 5));
//     console.log(number , " is not divisible by 5.");
//     console.log("Nearest number divisible by 5 is: " , nearest);
//   }
// }

// 7. Calculate salary components for employees across four different salary grades

//  A company has 120 employees who are divided into four grades as follows:
// Grade    Basic( Rs. per month)       D.A.(% of Basic)        H.R.A.(% of Basic)
// 1           10,000 or more                  40%                     30%
// 2           5,000 - 10,000                  40%                     25%
// 3           < 5,000 but > 2,000             30%                     20%
// 4           2,000 or less                   30%                     15%
// If the salary which is the total of Basic, D.A., and H.R.A., is above Rs.50,000
// Income Tax at the rate of 30 % of the annual salary exceeding 50,000 is deducted on
// monthly basis at source. Taking name of the employees and the Basic(monthly) pay as inputs,
// a pay slip, which contains Name, Basic monthly pay, DA, HRA, Monthly Income Tax and Net Monthly
// Salary, for each employee is to be printed.

// let employee_name = prompt("Enter a name");
// let basic_salary = Number(prompt("Enter a salary"));

// let da, hra, MIT, NMS, monthly_salary, annual_salary;

// if (basic_salary >= 10000) {
//   console.log("Employee Name is: ", employee_name);
//   console.log("Basic salary is: ", basic_salary);

//   da = (basic_salary * 40) / 100;
//   console.log("Daily allowance is: ", da);

//   hra = (basic_salary * 30) / 100;
//   console.log("Home and Rent Allowance is: ", hra);

//   monthly_salary = basic_salary + da + hra;
//   console.log("Basic Monthly Salary is: ", monthly_salary);

//   annual_salary = monthly_salary * 12;
//   console.log("Annual Salary is:", annual_salary);

//   if (annual_salary > 50000) {
//     MIT = (annual_salary * 30) / 100 / 12;
//     console.log(" Monthly Income Tax  is: ", MIT);

//     NMS = monthly_salary - MIT;
//     console.log("Net Monthly Salary is: ", NMS);
//   }

// }

// else if (basic_salary >=5000 && basic_salary<=10000){

//     console.log("Employee Name is: ", employee_name);
//     console.log("Basic salary is: ", basic_salary);

//     da = (basic_salary * 40) / 100;
//     console.log("Daily allowance is: ", da);

//     hra = (basic_salary * 25) / 100;
//     console.log("Home and Rent Allowance is: ", hra);

//     monthly_salary = basic_salary + da + hra;
//     console.log("Basic Monthly Salary is: ", monthly_salary);

//     annual_salary = monthly_salary * 12;
//     console.log("Annual Salary is:", annual_salary);

//     if (annual_salary > 50000) {
//       MIT = (annual_salary * 30) / 100 / 12;
//       console.log(" Monthly Income Tax  is: ", MIT);

//       NMS = monthly_salary - MIT;
//       console.log("Net Monthly Salary is: ", NMS);
//     }

// }

// let storedUsername = "vinay";
// let storedPassword = "password123";

// // Input credentials (you can change these values for testing)
// let inputUsername = prompt("enter the user name");
// let inputPassword = prompt("enter the password");

// // Nested if to validate login
// if (inputUsername === storedUsername) {
//   if (inputPassword === storedPassword) {
//     console.log("Login successful");
//   } else {
//     console.log("Invalid password");
//   }
// } else {
//   console.log("Invalid username");
// }
