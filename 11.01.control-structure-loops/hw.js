// let a = 7;
// let b = 9;
// let c = 2;

// let maxDigit;
// let minDigit;
// if (a > b && a > c) {
//   if (b > c) {
//     // console.log(`${a}${b}${c}`);
//     maxDigit = a * 100 + b * 10 + c;
//     minDigit = c * 100 + b * 10 + a;
//   } else {
//     maxDigit = a * 100 + c * 10 + b;
//     minDigit = b * 100 + c * 10 + a;
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     maxDigit = b * 100 + a * 10 + c;
//     minDigit = c * 100 + a * 10 + b;
//   } else {
//     maxDigit = b * 100 + c * 10 + a;
//     minDigit = a * 100 + c * 10 + b;
//   }
// } else {
//   if (a > b) {
//     maxDigit = c * 100 + a * 10 + b;
//     minDigit = b * 100 + a * 10 + c;
//   } else {
//     maxDigit = c * 100 + b * 10 + a;
//     minDigit = a * 100 + b * 10 + c;
//   }
// }

// console.log("maxDigit", maxDigit);
// console.log("minDigit", minDigit);

// I. question) Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını
// yoxlayan proqram tərtib edin.

// let a = 4;
// let b = 5;
// let c = 8;

// if (
//   a ** 2 + b ** 2 === c ** 2 ||
//   a ** 2 + c ** 2 === b ** 2 ||
//   b ** 2 + c ** 2 === a ** 2
// ) {
//   console.log("Verilən üçbucaq düzbucaqlıdı!");
// } else {
//   console.log("Verilən üçbucaq düzbucaqlı deyil!!");
// }

// II. question) 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
// Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:

// Result: 6, 5, 2

// let number = 652;

// let first = number % 10;
// let second = ((number % 100) - first) / 10;

// let third = (number - (number % 100)) / 100;

// console.log(`${third}, ${second}, ${first}`);

// III. question) Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.

// Məsələn: month="january" dedikdə cavab "january has 31 days",
// month="february" dedikdə cavab "february has 28 days" şəklində olsun

// let month = "FeBruaRy".toLocaleLowerCase();

// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log(`${month} has 31 days`);
//     break;
//   case "february":
//     console.log(`${month} has 28/29 days`);
//     break;
//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log(`${month} has 30 days`);

//   default:
//     console.log(`${month} is not valid month name`);

//     break;
// }

// VI. question) IV.question) Üçbücağın 3 tərəfi verilib.
// Onların bərabəryanlı üçbucaq olduğunu təyin edən proqram tərtib edin.

let a, b, c;

a = 4;
b = 4;
c = 6;

if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
  console.log("bərabəryanlıdır");
} else {
  console.log("bərabəryanlı deyil");
}

console.log(Math.abs(-22));

//swap

let num1 = 4;
let num2 = 5;

// num1 = num2; // 5
// num2 = num1; // 5

// first solution
// let temp = num1; // 4

// num1 = num2; // 5

// num2 = temp;

// second solution
// let temp = num1 + num2; // 9

// num1 = temp - num1;
// num2 = temp - num2;

// third solution

[num1, num2] = [num2, num1]; //array destructing

console.log(`num1: ${num1}, num2: ${num2}`);
