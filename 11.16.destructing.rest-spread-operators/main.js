//object litheral

const student = {
  firstName: "Aziza",
  lastName: "Zeynalova",
  age: 250,
  country: "Azerbaijan",
  city: "Ganja",
  universityInfo: {
    universityName: "GDU",
    location: "Ganja",
    profession: "Math & Informatics teacher",
  },
  getStudentInfo: function () {
    return `I am ${this.firstName} ${this.lastName}. I am studying at ${this.universityInfo.universityName}. My profession is ${this.universityInfo.profession}`;
  },
};

console.log(student.getStudentInfo());

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

//destructing

//array destructing

const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits

// let [a, b] = fruits;
// let [, , a, , b] = fruits;
let [a, b, ...rest] = fruits;

console.log(a, b);
console.log(rest);

//object destructing

let {
  country,
  universityInfo: studentInfo,
  universityInfo: { profession: ixtisas, location },
} = student;

// console.log(country);
// console.log(studentInfo);

// let { profession } = student.universityInfo;

console.log(ixtisas);
console.log(location);

// rest vs spread operators

//rest
let nums = [1, 2, 3, 4, 5];

let [first, second, ...qalanları] = nums;

console.log(qalanları);

function test(a, b, ...rest) {
  console.log(rest);
}

test(1, 2, 3, 4, 5);

let sumOfAllNums = (...nums) => {
  let sum = 0;
  nums.forEach((item) => {
    sum += item;
  });
  console.log(sum);
};

sumOfAllNums(22, 3, 42, 56);

let { firstName, lastName, ...restObj } = student;

console.log(restObj);

// spread

let str = "gwp202";

let strArr = [...str];

console.log(strArr);

let newNums = [...nums];

console.log(newNums);

// console.log(Math.max(...nums)); // 5

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...nums)); // 6

let testObj = { ...student };

// for in, for of loops

for (item of fruits) {
  console.log(item);
}

for (item in student) {
//   console.log(item);
    // console.log(student[item]);
  console.log(`${item}   ----->>>   ${student[item]}`);
}

