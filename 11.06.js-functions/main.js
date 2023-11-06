//argument vs parameter

//function declearation, function expression, arrow functions

//function declearation, without parameter
// function sayHi() {
//   console.log("Hello GWP201");
// }

// sayHi();

//function declearation, with parameter

// function sayHi(userName) {
//   console.log(`Hello ${userName}`);
// }

// sayHi(); // hello undefined
// sayHi("Ganira");

// defaul value

function sayHi(userName = "Mr / Mrs Somone") {
  console.log(`Hello ${userName}`);
}

// sayHi(); // Hello Mr / Mrs Somone
// sayHi("Shahana"); //Hello Shahana

// function sumOfTwoNumbers(number1, number2) {
//   let sum = number1 + number2;
//   console.log(sum);
// }

// sumOfTwoNumbers(); //NaN
// sumOfTwoNumbers(3, 7); // 10
// sumOfTwoNumbers(33, 77); // 100
// sumOfTwoNumbers(10, 60); // 70

//return keyword

function sumOfTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// let result = sumOfTwoNumbers(2, 3);

// console.log(result); //5

console.log(sumOfTwoNumbers(4, 7)); //

function calculateSquare(number) {
  let result = number ** 2;
  return result;
}

console.log(calculateSquare(6)); //36

let scores = [33, 44, 55, 66, 77, 88];
let numbers = [1, 2, 3, 4, 5, 6];

function sumOfScores(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumOfScores([1, 2, 3])); // 6
// console.log(sumOfScores(scores)); // 363
// console.log(sumOfScores(numbers)); // 21

function average(array) {
  let result = sumOfScores(array) / array.length;
  return result;
}

console.log(average(numbers)); //3.5
console.log(average(scores)); //60.5

//anonimous function

// function(){
//     console.log("I am anonimous function");
// }

//function expression

//without parameter
// sayHello(); //error
let sayHello = function () {
  console.log("hello world!");
};

// with parameter
// let sayHello = function (user) {
//   console.log(`Hello ${user}`);
// };
// sayHello("gwp");
// sayHello("ravan");

//arrow functions

// let sayHello = () => {
//   console.log("salamlar");
// };

// let sayHello = (user) => {
//   console.log("salamlar", user);
// };

// sayHello("gdu");

// let calculatePerimeter = (a, b) => {
//   return 2 * (a + b);
// };

// let calculatePerimeter = (a, b) => 2 * (a + b);

// console.log(calculatePerimeter(5, 8)); //26

// console.log(square(8)); //error
let square = (number) => number ** 2;
console.log(square(8)); //64

console.log(subtruct(4, 1)); //3

function subtruct(a, b) {
  return a - b;
}

//self invoked anonimous function

// ()()

//without parameter
// (function () {
//   console.log("I am anonimous function");
// })();

//with parameter

(function (fullName) {
  console.log(`wellcome ${fullName}`);
})("lorem ipsum");

// unlimited argument

//with declearation function
// function sumOfAllNumbers() {
//   let sum = arguments[0];

//   for (let i = 1; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// console.log(sumOfAllNumbers(1, 2, 3)); //6
// console.log(sumOfAllNumbers(1, 2, 3, 4, 5)); //15
// console.log(sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

//with arrow function

let sumOfAllNumbers = (...args) => {
  //   console.log(numbers);

  let sum = args[0];

  for (let i = 1; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log(sumOfAllNumbers(1, 2, 3)); //6
console.log(sumOfAllNumbers(1, 2, 3, 4, 5)); //15
console.log(sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

// callback vs higer order functions

let mainFunction = (cb) => {
  cb();
};
// let callback = () => {
//   console.log("I am callback function");
// };

mainFunction(()=>{
    console.log("salam");
});
