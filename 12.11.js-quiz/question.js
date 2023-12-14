let firstValue = "add";
let secondValue = "success";

function findCountOfCharsAsObject(str) {
  let result = {};

  //first solution
  //   [...str].forEach((char) => {
  //     result[char] ? (result[char] += 1) : (result[char] = 1);
  //   });

  //second solution

  // for (char of str) {
  //   result[char] ? (result[char] += 1) : (result[char] = 15);
  // }

  //third solution

  result = str.split("").reduce((obj, char) => {
    obj[char] ? obj[char]++ : (obj[char] = 1);
    return obj;
  }, {});

  return result;
}

console.log(findCountOfCharsAsObject("add")); // {a: 1, d: 2}
console.log(findCountOfCharsAsObject(secondValue)); // {s: 3, u: 1, c: 2, e: 1}

let userObject = {
  userName: "Jhon_Doe",
  age: 66,
};

// console.log(userObject.userName);
// console.log(userObject["userName"]);

// // userObject.skills = ["html", "css", "js"];
// userObject["skills"] = ["html", "css", "js"];

// console.log(userObject);

// console.log(userObject.email); //undefined

// let str = "salam";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
