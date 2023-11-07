const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

// let userObj = {
//   email: "lorem@gmail.com",
//   firstName: "Lorem",
//   lastName: "Ipsum",
//   age: 33,
//   getFullName: function () {
//     console.log(`I am ${this.firstName} ${userObj.lastName}`);
//   },
// };

// userObj.getFullName();

// let array = {
//   pop: function (arr) {},
//   push: function (arr) {},
// };

//length
// console.log(numbers.length);

//pop, push, shift, unshift

// console.log(numbers.pop()); //100

// console.log(numbers.push(88, 99)); // 8
// numbers.push(88, 77, 66);

// console.log(numbers);

const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits

// console.log(fruits.shift());

// fruits.unshift("a", "b")
// console.log(fruits.unshift("a", "b"));;

// console.log(fruits);

// at

// console.log(fruits.at(2)); //mango
// console.log(fruits.at(0)); // banana
// console.log(fruits[0]);

// console.log(fruits[fruits.length - 1]); // orange

// console.log(fruits.at(fruits.length - 1));
// console.log(fruits.at(-1)); //orange
// console.log(fruits.at(-4)); //mango

//concat

// let vegetablesAndFruits = vegetables.concat(fruits);
// let vegetablesAndFruits = vegetables.concat(fruits, countries);

// console.log(vegetablesAndFruits);

// let newNumbers = [...numbers];

// console.log(newNumbers);

let vegetablesAndFruits = [...vegetables, ...fruits, ...numbers];

// console.log(vegetablesAndFruits);

//slice
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// console.log(countries.slice());
// console.log(countries.slice(3)); //"Norway", "Iceland"
// console.log(countries.slice(1, 4)); //"Denmark", "Sweden", "Norway"

// console.log(countries.slice(-1)); //"Iceland"
// console.log(countries.slice(-1, -3)); //[]
// console.log(countries.slice(4, 1)); //[]
// console.log(countries.slice(-3, -1)); //"Sweden", "Norway"
// console.log(countries.slice(-3)); //"Sweden", "Norway", "Iceland"

//splice

// countries.splice(2, 2);
// countries.splice(2, 1, "salam", "sagol");
countries.splice(2, 2, "salam", "sagol");

console.log(countries);

const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "Redux",
  "Node",
  "JS",
  "MongDB",
];

let index = webTechs.indexOf("JS");
// console.log("index", index);

webTechs.splice(3, 0, "Angular");

console.log(webTechs);
// /indexOf

// console.log(webTechs.indexOf("js")); //-1
// console.log(webTechs.indexOf("JS")); // 2
// console.log(webTechs.indexOf("JS", 3)); // 4
// console.log(webTechs.indexOf("JS", 5)); // 7

//lastIndexOf
console.log(webTechs.lastIndexOf("JS")); //7

// const WebTechs = []

//includes

// console.log(webTechs.includes("Bootstrap")); //false
// console.log(webTechs.includes("React")); //true

//join

// console.log(webTechs.join());
// console.log(webTechs.join(""));
// console.log(webTechs.join("-"));
// console.log(webTechs.join("."));
// console.log(webTechs.join("#"));

// let sampleText = `lorem ip,sum do,lor`;

// console.log(sampleText.split());
// console.log(sampleText.split(""));
// console.log(sampleText.split(" "));
// console.log(sampleText.split(","));

//forEach vs map

// for (let i = 0; i < webTechs.length; i++) {
//   console.log(`${i}. ${webTechs[i]}`);
// }

webTechs.forEach((element, index, array) => {
  console.log(`${index}. ${element}`);
});

// let cb = (elem, i, arr)=>{

// }
// numbers.forEach(cb)

// numbers.forEach(()=>{

// })

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

let sum = 0;
numbers.forEach(function (item, index) {
  sum += item;
  return "asdas";
});

console.log("sum: ", sum);

//map

// let newNums = numbers.map((item, index, array) => {
//   return item * 2;
// });
let newNums = numbers.map((item) => item * 2);

console.log(newNums);

// let square = [1, 2, 3, 4, 5].map((elem, index) => {
//   return elem ** 2;
// });

// console.log(square);

// let newArr = [];
// [1, 2, 3, 4, 5].forEach((item, index) => {
//   newArr.push(item ** 2);
// });
// console.log(newArr);

const countries2 = ["Finland", "Denmark", "Sweden", "America", "Albania"]; // array of strings, countries

let newCountries = countries2.map((elem, index, arr) =>
  elem.substring(0, 3).toLocaleUpperCase()
);

// let newCountries = countries2.map((elem, index, arr) => {
//   return elem.substring(0, 3).toLocaleUpperCase();
// });

console.log(newCountries);

//findIndex

// let i = numbers.findIndex((elem, index) => {
//   return elem > 10;
// });

let i = numbers.findIndex((elem, index) => elem > 10);

// let i = numbers.findIndex((elem, index) => {
//   return elem > 10;
// });

console.log(i);

// console.log(webTechs);
// console.log(webTechs.findIndex((elem) => elem[0].toLocaleLowerCase() === "n"));

//find

let obj = countries2.find((item) => {
  return item[0] === "A" && item[item.length - 1] === "a";
});

console.log(obj);

//filter

let filteredCountries = countries2.filter((item) => {
  return item[0] === "A" && item[item.length - 1] === "a";
});

console.log(filteredCountries);
