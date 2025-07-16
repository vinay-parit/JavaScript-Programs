// ============ Q.1 CREATE A TEMPERATURE CATEGORIZER WITH THESE RANGES:===============
// -<0 --> "VERY COLD"
// -<16 --> "COLD OUTSIDE"
// -<25 -->  "WEATHER IS OK"
//  -<35 --> "LET'S GO FOR SWIM"
// -<45 --> "TURN ON AC"
// - >= --> "TOO HOT"

// step1:
// let temperature = Number(prompt("Enter the Temperature"))

// // step2:

// if (temperature < 0) {
//   console.log("very cold");
// }
// // step3:

// else if (temperature < 16) {
//   console.log("Cold outside");
// }
// // step4:

// else if (temperature < 25) {
//   console.log("Wheather is ok");
// }
// // step5:

// else if (temperature < 35) {
//   console.log("lets go for swim");
// }
// // step6:

// else if (temperature < 45) {
//   console.log("turn on ac");
// }
// // step7:

// else {
//   console.log("you'll be'DIE'soon");
// }

// ============= Q.2 CALCULATE AN ELECTRICITY BILL BASED ON THESE RATES: ================
// - 0-100 UNITS -> $0.80/unit
// - 101-200 UNITS -> $1.20/unit
// - 201-300 UNIT -> $1.40/unit
// - Above 300 units -> $1.80/unit

//step:1
// let unit =  Number (prompt('Enter the Meter number'))
// let rate

// //step:2
// if (unit>0 && unit <=100){
//     rate = unit*0.8
//     console.log('unit consumed rate', rate);
// }

// //step:3
// else if (unit>= 100 && unit <=200){
//     rate = unit*1.2
//     console.log('unit consumed rate 1.2');

// }

// //step:4
// else if (unit>= 200 && unit <=300){
//     rate = unit*1.4
//     console.log('unit consumed rate 1.4');

// }

// //step:5
// else if (unit >=300){
//     rate = unit*1.8
//     console.log('unit consumed rate 1.8');

// }

// //step:6
// else{
//     console.log('no consumed rate');

// }

// ================ Q.3 CREATE A STUDENT RESULT CALCULATOR:================
// - <35 -> Fail
// - 35-49 -> 3rd Division
// - 50-59 -> 2nd Division
// - 60-69 -> 1st Division
// - 70+ -> Distinction

// // step1:
// let num1 = Number (prompt("enter first sub marks"))
// let num2 = Number (prompt("enter second sub marks"))
// let num3 = Number(prompt("enter third sub marks"));

// // // step2:
// let average = (num1+num2+num3) /3
// console.log('The avrage is', average);

// // step3:

// if (average >=35 && average <=50){
//     console.log('third division');

// }

// // step4:
//  else if (average >=50 && average <= 60) {
//   console.log("second division");
// }

// // step5:
//  else if (average >= 60 && average <= 70) {
//   console.log("first division");
// }

// // step6:
//  else if (average >=70) {
//   console.log("Distinction");
// }

// // step7:
// else{
//     console.log("fail");

// }

// =====================Q.4.Build an employee salary calculator:========================
//    - Salary ≥ 5000 → DA 110%, HRA 20%, Conveyance ₹500
//    - Salary 3000–4999 → DA 100%, HRA 15%, Conveyance ₹300
//    - Salary < 3000 → DA 90%, HRA 10%, Conveyance ₹200

// let sal = Number(prompt("enter the salary"));
// let DA, HRA, total_sal;

// if (sal >= 5000) {
//   DA = (sal * 110) / 100;
//   console.log(DA);

//   HRA = (sal * 20) / 100;
//   console.log(HRA);

//   total_sal = sal + DA + HRA + 500;
//   console.log(total_sal);
// } else if (sal >= 3000 && sal <= 4999) {
//   DA = (sal * 100) / 100;
//   console.log(DA);

//   HRA = (sal * 15) / 100;
//   console.log(HRA);

//   total_sal = sal + DA + HRA + 300;
//   console.log(total_sal);
// } else {
//   DA = (sal * 90) / 100;
//   console.log(DA);

//   HRA = (sal * 10) / 100;
//   console.log(HRA);

//   total_sal = sal + DA + HRA + 200;
//   console.log(total_sal);
// }

// ============== Q.5. Assign gifts based on purchase amount:==============
//    - ₹100–500 → Key Ring
//    - ₹501–1000 → Leather Purse
//    - Above ₹1000 → Pocket Calculator

// step1:   
// let rate = Number (prompt("enter the rate"))
// let quantity = Number (prompt("enter the quantity"))

// // step2:
//     let total = (rate*quantity)
//     console.log('total amount is:',total);

//     // step3:
//     if (total >= 100 && total <= 500) {
//       console.log("a key ring");
//     }

//     // step4:
//     else if (total >= 500 && total <= 1000) {
//       console.log("a leather purse");
//     }

//     // step5:
//     else if (total >= 1000) {
//       console.log("a pocket calculator");
//     }

//     // step6:
//     else {
//       console.log("kya re Gareeb ");
//     }

// ===================Q.6.Create an income tax calculator:============================
//    - ≤ ₹8000 → No Tax
//    - ₹8001–9000 → 20%
//    - ₹9001–10000 → 30%
//    - Above ₹10000 → 40%

// // step 1
// let sal = Number(prompt("Enter the salary"));
// // step 2
// let tax;
// // step 3
// if (sal <= 8000) {
//   console.log("No Income Tax");
// }
// // step 4
// else if (sal >= 8001 && sal <= 9000) {
//   tax = (sal * 20) / 100;
//   console.log("income tax", tax);
// }
// // step 5
// else if (sal >= 9001 && sal <= 10000) {
//   tax = (sal * 30) / 100;
//   console.log("income tax", tax);
// }
// // step 6
// else if (sal > 10000) {
//   tax = (sal * 40) / 100;
//   console.log("income tax", tax);
// }

// =================== Q7. Calculate sales commission:====================
//    - ₹1–999 → 1%
//    - ₹1000–9999 → 5%
//    - ₹10000–99999 → 10%

// // step 1
// let sales = Number(prompt("Enter the sales amount:"));
// // step 2
// let comm;
// //  step 3
// if(sales >=1 && sales <=999){
//     comm = (sales * 1)/100
//     console.log("sales commisssion is", comm);

// }
// // step 4
// if (sales >= 1000 && sales <= 9999) {
//   comm = (sales * 5) / 100;
//   console.log("sales commisssion is", comm);
// }
// // step 5
// if (sales >= 10000 && sales <= 99999) {
//   comm = (sales * 10) / 100;
//   console.log("sales commisssion is", comm);
// }

// ================ Q.8 Build a tourist car billing system with these rates:===============
//    - Maruti (≤ 100 km): ₹800 + ₹100 driver fee
//    - Maruti (101–200 km): ₹800 + ₹10/km (above 100) + ₹300 driver fee
//    - Maruti (> 200 km): ₹15/km + ₹500 driver fee
//    - Sumo (≤ 100 km): ₹600 + ₹100 driver fee
//    - Sumo (101–200 km): ₹600 + ₹8/km (above 100) + ₹300 driver fee
//    - Sumo (> 200 km): ₹12/km + ₹500 driver fee

// // step 1
// let car = prompt("Which car:");
// // step2
// let km = Number(prompt("How much km:"));
// // step 3
// let total_bill, km_charge, km_charge2;
// // step 4
// (maruti = 800), (sumo = 600);
// // step 5
// if (car === "maruti") {
//   // step 6
//   if (km <= 100) {
//     total_bill = maruti + 100;
//     console.log("total bill is:", total_bill);
//   }
//   // step 7
//   else if (km >= 101 && km <= 200) {
//     km_charge = (km - 100) * 10;
//     total_bill = maruti + km_charge + 300;
//     console.log("total bill is:", total_bill);
//   }
//   // step 8
//   else if (km > 200) {
//     km_charge = (km - 100) * 10; 
//     km_charge2 = (km - 100) * 15;
//     total_bill = maruti + km_charge + km_charge2 + 500;
//     console.log("total bill is:", total_bill);
//   }
// }
// // step 9
// else {
//   // step 10
//   if (km <= 100) {
//     total_bill = sumo + 100;
//     console.log("total bill is:", total_bill);
//   }
//   // step 11
//   else if (km >= 101 && km <= 200) {
//     km_charge = (km - 100) * 10;
//     total_bill = sumo + km_charge + 300;
//     console.log("total bill is:", total_bill);
//   }
//   // step 12
//   else if (km > 200) {
//     km_charge = (km - 100) * 8;
//     km_charge2 = (km - 100) * 12;
//     total_bill = sumo + km_charge + km_charge2 + 500;
//     console.log("total bill is:", total_bill);
//   }
// }

// =================== Q.9 Create a salary increment calculator: ========================
//    - Base ₹10700 → ₹550 increment
//    - Base ₹12500 → ₹750 increment
//    - Base ₹15000 → ₹1050 increment

// let Salary = 15000
//  let increment
//  let totalSal

//  if(Salary === 10700 ){
//     increment=550
//     totalSal= Salary + increment
//     console.log(totalSal);  
//  }
//  else if (Salary === 12500) {
//    increment = 750;
//    totalSal = Salary + increment;
//    console.log(totalSal);
//  }
//  else if( Salary === 15000) {
//    increment = 1050;
//    totalSal = Salary + increment;
//    console.log(totalSal);
//  }




// ============== Q10. Assign prize amounts based on test scores and grades: ==================
//     - ≥ 80 & A → ₹1,00,000
//     - 65–79 & B → ₹50,000
//     - 40–64 & C → ₹25,000
//     - < 40 & D → ₹10,000

// step 1
// let marks = Number(prompt("Enter the marks:"));
// // step 2
// let grade = prompt("Enter you'r grade");
// // step 3
// if (marks >= 80 && grade == "A") {
//   console.log("prize money is 1,00,000");
// }
// // step 4
// else if (marks >= 65 && marks <= 79 && grade == "B") {
//   console.log("prize money is 50,000");
// }
// // step 5
// else if (marks >= 40 && marks <= 64 && grade == "C") {
//   console.log("prize money is 25,000");
// }
// // step 6
// else if (marks <= 40 && grade == "D") {
//   console.log("prize money is 10,000");
// }

// ============== Q.11 Count high-earning employees (salary > ₹20,000) with these allowances: ==============
//     - Basic < ₹5000 → DA 8%, IT 6%
//     - ₹5000–9999 → DA 15%, IT 9%
//     - ≥ ₹10000 → DA 18%, IT 12%

// step 1
// let sal = Number(prompt("Enter the salary:"));
// // step 2
// let DA, IT, total_sal;
// // step 3
// if (sal < 5000) {
//   DA = (sal * 8) / 100;
//   console.log("DA is:", DA);

//   IT = (sal * 6) / 100;
//   console.log("IT is:", IT);

//   total_sal = sal + DA + IT;
//   console.log("total salary is:", total_sal);
// }
// // step 4
// else if (sal >= 5000 && sal <= 9999) {
//   DA = (sal * 15) / 100;
//   console.log("DA is:", DA);

//   IT = (sal * 9) / 100;
//   console.log("IT is:", IT);

//   total_sal = sal + DA + IT;
//   console.log("total salary is:", total_sal);
// }
// // step 5
// else {
//   DA = (sal * 18) / 100;
//   console.log("DA is:", DA);

//   IT = (sal * 12) / 100;
//   console.log("IT is:", IT);

//   total_sal = sal + DA + IT;
//   console.log("total salary is:", total_sal);
// }



// ===================== Q.12 Create a gross salary calculator: =======================
//     - < ₹2000 → DA 5%
//     - ₹2000–6999 → DA 8%
//     - ₹7000–9999 → DA 10%
//     - ≥ ₹10000 → DA 12%
// step 1
// let sal = Number (prompt("Enter the salary:"))
// // step 2
// let DA, total_salary;
// // step 3
// if (sal < 2000) {
//   DA = (sal * 5) / 100;
//   console.log("DA is", DA);
//   total_salary = sal + DA;
//   console.log("Total salary is:", total_salary);
// }
// // step 4
// else if (sal >= 2000 && sal <= 6999) {
//   DA = (sal * 8) / 100;
//   console.log("DA is", DA);
//   total_salary = sal + DA;
//   console.log("Total salary is:", total_salary);
// } 
// // step 5
// else if (sal >= 7000 && sal <= 9999) {
//   DA = (sal * 10) / 100;
//   console.log("DA is", DA);
//   total_salary = sal + DA;
//   console.log("Total salary is:", total_salary);
// }
// // step 6
// else {
//   DA = (sal * 12) / 100;
//   console.log("DA is", DA);
//   total_salary = sal + DA;
//   console.log("Total salary is:", total_salary);
// }




// ==================== Q.13 Build a height categorizer: ===========================
//     - < 150 cm → Dwarf
//     - 150–164 cm → Average
//     - 165–180 cm → Tall
//     - > 180 cm → Abnormal

// step 1
// let height =Number(prompt("Enter the height:"))

// // step 2
//     if (height < 150) {
//       console.log("Dwarf");
//     }
//     // step 3
//     else if (height >= 150 && height <= 164) {
//       console.log("Average");
//     }
//     // step 4
//     else if (height >= 165 && height <= 180) {
//       console.log("Tall");
//     } 
//     // step 5
//     else {
//       console.log("Abnormal");
//     }

    
// ================14. Determine which quadrant a point lies in based on x and y coordinates.=============
// step 1
// let num1 = Number(prompt("Enter the number:"));
// // step 2
// let num2 = Number(prompt("Enter another number:"));
// // step 3
// if (num1 >=0 && num2 >=0) {
//   console.log("its in First quadrant");
// } 
// // step 4
// else if (num1 <0 && num2 >=0 ) {
//   console.log("its in second quadrant");
// } 
// // step 5
// else if (num1 <0 && num2 <0) {
//   console.log("its in third quadrant");
// } 
// // step 6
// else {
//   console.log("its in fourth quadrant");
// }




// let num = number (prompt("enter the number"))
//     if ((num%3==0) && (num%5==0))
//     console.log("number is divisible by both")
//     else if

// step1:
// let num1 = Number (prompt("enter a number"))
// let num2 = Number (prompt("enter another number"))

// // step2:
// let avrage = (num1+num2) /2
// console.log('The avrage is', avrage);

// // step3:
//  if (num1>avrage){
//     // step4:
//     let tempt = num1
//     num1= num2
//     num2 = tempt
//     console.log('if', num1,num2);

//  }
// // step5:

//  else {
//     console.log('else', num1 ,num2);

//  }

// step1:
// let year = Number (prompt("enter the year"))

// // step2:
// if (year%4==0 && year%100!= 0 || year%400==0){
//     console.log('leap year');

// }
// // step3:

// // else if (year%400==0){
// //     console.log('centurey year is a leap year');

// // }

// // step4:
// else{
//     console.log('year is not a leap year');

// }

//Take input from user and display "1" if the number is positive and "0" if number is negative.

// let checkNumber = Number(prompt("Enter the Number:"))

// if(checkNumber>=0){
//     console.log("1");
// }
// else{
//     console.log("0");
// }
