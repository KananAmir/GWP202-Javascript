// count++ vs ++count difference

let count = 0;

// count = count + 1;
// count++;

// console.log(count++); //0
// console.log(count); //1
// console.log(count); // 2

console.log(++count); //1
console.log(count++); // 1

console.log(count); //2

// comparison operators

// =, ==, ===

// = assignment
// == comparison - check only value
// === strict comparison - check value and data type

let num1 = 5; // number
let num2 = "5"; //string

console.log(num1 == num2); //true
console.log(num1 === num2); //false

console.log(1 == true); // true
console.log(1 === true); //false

// !=
// !==

console.log(1 != true); // false
console.log(1 !== true); //true

// console.log(typeof typeof num1); // string

console.log(5 >= 3); //true

// logical operators

// && , || , !

// && - false bir ifadə axtarır, tapa bilməsə ən sonuncu true'nu qaytarır
// || - true bir ifadə axtarır, tapa bilməsə ən sonuncu false'nu qaytarır

// FALSY value in JS

// false, 0, -0, "", ``, null, undefined, NaN
//truth values examples: true, 44, 254, "Salam", "GWP"

console.log(5 > 17 && 3 < 5 && 44 > 23); //false

console.log(5 < 17 && 3 < 5 && 44 > 23); // true

console.log(5 > 17 || 3 < 5 || 44 > 23); //true

console.log(5 < 17 || 3 < 5 || 44 > 23); // true

console.log(5 > 17 || 3 > 5 || 44 < 23); // false

console.log(5 > 3 && null && 6 < 78); // null
console.log(3 < 5 && "Salam" && 235); // 235
console.log(3 < 5 && 44 && "Salam"); // "Salam"

// console.log(5 > 3 && 235 && 6 < 78);

console.log("GWP" || null || 6 < 78); // ""GWP
console.log(3 > 5 && NaN && 235); // 235
console.log(3 > 5 || 44 || null); // 44

let userAge = 22;

userAge >= 18 && console.log("Wellcome!!");

let a = 0;

5 > 3 && a++;

console.log("a: ", a);

console.log(!(5 > 12));
console.log(!(5 < 12));

// ?? - nullish coelescing
// null və ya undefined'dursa sağına baxır
// console.log(3 < 1 || NaN);

console.log(null ?? "Salam1");
console.log(NaN ?? "Salam2");
console.log(undefined ?? "Salam3");
console.log("gwp" ?? "Salam4");

// console.log(typeof null);

// NaN - not a number

console.log("a" * 7);
console.log(7 - "salam");
console.log("a" / 3);

console.log(typeof NaN);
