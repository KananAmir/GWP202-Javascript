const numbers = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];

// numbers.reduce((sum, item) => {
//   console.log(sum + item);
//   return sum + item;
// }, 0);
// console.log(numbers.map((item) => item));
// 1. numbers array'ni artan sıra ilə düzün

const products = [
  { name: "one Product 1", price: 100, category: "Electronics" },
  { name: "two Product 2", price: 60, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "Electronics" },
];

// 2. products array'ni name'ə və price'a görə artan sıra ilə düzün

// 3. products array'ində price'i 50'dən böyük olan productların price'larının cəmini tapın

// solution 1
// let filtered = products
//   .filter((item) => item.price > 50)
//   .reduce((sum, item) => sum + item.price, 0);

// solution 2
let filtered = products.reduce(
  (sum, curr) => (curr.price > 50 ? sum + curr.price : sum),
  0
);
console.log(filtered);

const students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Davud", scores: [100, 100, 100] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
];

let filteredStudents = students.map((item, index, arr) => {
  return {
    ...item,
    average:
      item.scores.reduce((acc, curr) => acc + curr, 0) / item.scores.length,
  };
});

// console.log(filteredStudents.sort((a, b) => b.average - a.average)[0]);

// console.log(
//   filteredStudents
//     .sort((a, b) => b.average - a.average)
//     .filter((item) => item.average >= 90)
// );

console.log(filteredStudents.sort((a, b) => b.average - a.average));

// let newStudents = students.sort((a, b) => {
//   let resultA;
//   let resultB;
//   resultA = a.scores.reduce((sum, el) => sum + el) / a.scores.length;
//   resultB = b.scores.reduce((sum, el) => sum + el) / b.scores.length;
//   return resultB - resultA;
// });

// console.log(newStudents);

// 4. students array-ində tələbələrin ortalaması ən yüksək olanı,
//ortalaması 90-dan yuxarı olanı və
//tələbələrin oratalamsı azalan sıra ilə düzən program tərtib edin

const cities = ["agdash", "baku", "ganja", "goychay", "mingachevir", "shirvan"];

// 5. cities arrayindən hər bir elementinin ilk hərfi böyük hərf olan yeni bir array qaytaran funksiya yazın

console.log(
  cities.map(
    (item) =>
      item[0].toLocaleUpperCase() +
      item.slice(1, item.length - 1) +
      item.slice(-1).toLocaleUpperCase()
  )
);

// function getUpper(arr) {
//     ...
// }

// console.log(getUpper(cities)); // ["Agdash", "Baku", "Ganja", "Goychay", "Mingachevir"];

// 6. cities arrayindən hər bir elementinin ilk hərfi və son hərfi böyük hərf olan yeni bir array qaytaran
//funksiya yazın

// function getUpper2(arr) {
//     ...
// }

// console.log(getUpper2(cities)); // ["AgdasH", "BakU", "GanjA", "GoychaY", "MingacheviR"];
