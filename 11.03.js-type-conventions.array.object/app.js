//Arrays
let array = [33, 25, 12, 17, "salam"]; // length 4

// type of array is object

// let arr = new Array(); // empty array
let arr = new Array(5); // array length 5

arr[0] = "Ravan";
arr[1] = "Ruslan";
console.log(arr);
// console.log(array);

// console.log(array.length); //4
// console.log(arr.length); // 5

// console.log(array[0]); // first item in array
// console.log(array[array.length - 1]); //last item in array

for (let i = 0; i < array.length; i++) {
  //   console.log(i);
  console.log(array[i]);
}

let cities = [
  "Baku",
  "Ganja",
  "Gronboy",
  "Shamkir",
  "Barda",
  "Kalabacar",
  "Goychay",
];

cities[0] = "Agdash";
cities[cities.length - 1] = "London";

// console.log(cities);

let results = [65, 95, 76, 84, 866, 55];
let sum = 0;

// for (let i = 0; i < results.length; i++) {
//   //   console.log(results[i]);
//   sum += results[i];
// }

// let average = parseInt(sum / results.length);
// console.log("SUM: ", sum);
// console.log("AVERAGE: ", average);

// console.log(Math.max(...results));

let max = results[0]; //65
for (let i = 1; i < results.length; i++) {
  if (results[i] > max) {
    max = results[i];
  }
}

// console.log("MAX: ", max);

let min = results[0]; //65
for (let i = 1; i < results.length; i++) {
  if (results[i] < min) {
    min = results[i];
  }
}

// console.log("MIN: ", min);

// ARRAY COPY

let students = ["Shahana", "Sabina", "Aziza", "Aysel", "Sama", ["a", "b", "c"]];

//shallow copy
// let newStudents = students;

// newStudents[0] = "Nargiz";
// console.log(students); //original
// console.log(newStudents);

// deep copy

// let newStudents = [...students]; //
// // console.log(newStudents[newStudents.length - 1]); // last item of newStudents array
// newStudents[newStudents.length - 1][0] = "salam";
// newStudents[0] = "Nargiz";
// console.log(students); //original
// console.log(newStudents);

// deep copy with structuredClone

let newStudents = structuredClone(students);
// console.log(newStudents[newStudents.length - 1]); // last item of newStudents array
newStudents[newStudents.length - 1][0] = "salam";
newStudents[0] = "Nargiz";
console.log(students); //original
console.log(newStudents);

//json stringify, json parse

// pop, push, shift, unshift

let techs = ["html", "css", "js", "react"];

console.log(techs);

// techs.push("vue");  //add item to the end of an array

techs.pop(); //deletes item from end of an array
// console.log(techs.pop()); //dreturns deleted item

// console.log(techs);

// techs.unshift("bootstrap"); //adds item to the begining of an array

// console.log(techs);

let deletedItem = techs.shift(); // deletes first item in an array

console.log(techs);
console.log(deletedItem);

//OBJECT
// [] - arr
// {} - obj

// object litherals
let userObject = {
  userName: "lorem_ipsum",
  email: "lorem@gmail.com",
  age: 22,
  city: "Ganja",
  isMarried: false,
  skills: ["html", "css"],
};

// console.log(userObject.userName);
// console.log(userObject.skills);

// console.log(userObject["city abc"]);
// console.log(userObject.city); //"Ganja"
// console.log(userObject["city"]); "Ganja"

//for of - array, for in  - obj

for (let item in userObject) {
  //   console.log(item);
  //   console.log(userObject[item]);

  console.log(`${item} - ${userObject[item]}`);
}
