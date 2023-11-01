// LOOPS
//for loop
// let a = 0;
// a++;
// a = a + 1;

//starter point, condition, steps
// for (let index = 0; index < 10; index++) {
//   //   console.log("gwp");
//   console.log(index);
// }

// for (let i = 0; i < 10; i = i + 2) {
//   //   console.log("gwp");
//   console.log(i);
// }

//infinite loop
let count = 0;
// for (;;) {
//   //   console.log("Hello World!!");
//   console.log(count++);

// }

//break vs continue

// for (;;) {
//   //   console.log("Hello World!!");

//   if (count === 5) continue;

//   console.log(count++);

//   if (count === 20) break;
// }

//while & do while

// while (count < 10) {
//   //   console.log("hello gwp");
//   count++;

//   if (count === 5) continue;

//   console.log(count);
// }

// infinite loop
// while (true) {
//   console.log(count++);
// }

//do while

// while (count === 10) {
//   console.log("hello");
// }

do {
  count++;
  console.log("hello");
} while (count === 10);

// 1-10 daxil ədədlərin cəmini tapaq

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   //   sum = sum + i;
//   sum += i;
// }
// console.log("SUM", sum);

// // 1-100 arası only təklər
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 1) console.log(i);
// }

let str = "lorem ipsum";
console.log(str[str.length - 1]);
console.log(str.length);

for (i = 0; i < str.length; i++) {
  console.log(str[i]);
}
