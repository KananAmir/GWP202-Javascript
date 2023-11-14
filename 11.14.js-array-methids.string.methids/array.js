const numbers = [10, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

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

// every

// console.log(numbers.every((item) => item > 100)); //false
// console.log(numbers.every((item) => item >= 100)); //false
// console.log(numbers.every((item) => item >= 0)); //true
// console.log(numbers.every((item) => item > 0)); //false

// some
// console.log(numbers.some((item) => item > 100)); //false
// console.log(numbers.some((item) => item >= 100)); //true
// console.log(numbers.some((item) => item >= 0)); //true
// console.log(numbers.some((item) => item > 0)); //true

//sort

// ascending - artan sira
// descending - azalan sira

// console.log(webTechs.sort());

// console.log(numbers.sort());
// console.log("a" > "b"); //false
// console.log("a" > "A"); // true
// console.log("z" > "c"); // true

// numbers.sort((a, b) => a - b); //ascending
// console.log(numbers);

// numbers.sort((a, b) => b - a); //descending

// console.log(numbers);

// sort by salary
// employees.sort((a, b) => a.salary - b.salary);
// employees.sort((a, b) => b.salary - a.salary);

// console.log(employees);

//sort by name

// employees.sort((first, second) => (first.name > second.name ? 1 : -1));

//ascending
// employees.sort((a, b) => a.name.localeCompare(b.name));
//descending
// employees.sort((a, b) => b.name.localeCompare(a.name));

// console.log("a".localeCompare("a")); // 0
// console.log("a".localeCompare("b")); // -1
// console.log("b".localeCompare("a")); //1
// console.log(employees);

//reduce

// let sum = arr[0];

// for (let i = 1; i < numbers.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// const numbers = [10, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

let sum = numbers.reduce((acc, curr, index, arr) => acc + curr);
// let sum = numbers.reduce((acc, curr, index, arr) => acc + curr, 0);

console.log(sum);

// let webTechStr = webTechs.reduce((result, item) => result + item, "aysel");
// let webTechStr = webTechs.reduce((result, item) => result + item);
let webTechStr = webTechs.reduce((result, item) => result + ", " + item);

console.log(webTechStr);

//fill

let nums = [1, 2, 3, 4, 5];

// nums.fill("x");
// nums.fill(10);
nums.fill("a", 2);

console.log(nums);

let emptyArray = new Array(10);

// emptyArray.fill("#", 3);
emptyArray.fill("#", 3, 7);

console.log(emptyArray);

let n = [1, 2, 3, 4, 5];
n.fill("a");
n.fill("b", 1);
n.fill("c", 2);
n.fill("d", 3);
n.fill("e", 4);

console.log(n);

let newEmptyArray = new Array(10);

for (let i = 0; i < newEmptyArray.length; i++) {
  newEmptyArray.fill(i, i);
}
console.log(newEmptyArray);

//from

console.log(Array.from("gdu"));

console.log(Array.from([1, 2, 3], (element) => element ** 2));

//flat

// console.log([1, 2, [4, 5], [6, [7, [8], 9]]].flat(1));
// console.log([1, 2, [4, 5], [6, [7, [8], 9]]].flat(2));
// console.log([1, 2, [4, 5], [6, [7, [8], 9]]].flat(3));

//flatMap

console.log([1, 2, 3, 4].flatMap((item) => (item == 3 ? "a" : "b")));
