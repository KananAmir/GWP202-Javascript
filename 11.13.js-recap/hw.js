// function test(a) {
//   return a * 5;
// }

// let user = {
//   fullName: "lorem ipsum",
//   email: "asda@gmail.com",
//   sayHi: function () {
//     console.log("Hello, I am Lorem");
//   },
// };

// user.sayHi();

//declearation

// function sumOfTwoNums(a, b) {
//   return a + b;
// }

// expression
// let sumOfTwoNums = function (a, b) {
//   return a + b;
// };

// arrow

// let sumOfTwoNums = (a, b) => a + b;

// console.log(sumOfTwoNums(3, 8));
// console.log(sumOfTwoNums(13, 5));
// console.log(sumOfTwoNums(-7, 18));

// function sumOfAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

let sumOfAll = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

// console.log(sumOfAll(3, 4, 7, 8));
// console.log(sumOfAll(3, 44, 7, 13, 58, 2));
// console.log(sumOfAll(25, 54, 86));

let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];
// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// let filtered = arr.filter((elem, index, arr) => {
//   return elem.name[0] === "t";
// });

// let filtered = arr.filter((elem) => elem.name[0] === "t");

// console.log(filtered);

function allObjsStartsT(array) {
  let filtered = array.filter((elem) => elem.name[0] === "t");
  return filtered;
}

// console.log(
//   allObjsStartsT([
//     {
//       name: "salam",
//       key: 1,
//     },
//     {
//       name: "task",
//       key: 2,
//     },
//   ])
// );

// console.log(allObjsStartsT(arr));

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

function findAtLeastTwoT(array) {
  let filteredArr = array.filter(
    (item) => item.name.indexOf("t") !== item.name.lastIndexOf("t")
  );

  return filteredArr;
}

// console.log(findAtLeastTwoT(arr));

// let str = "hello";

// console.log(str.indexOf("l")); //2
// console.log(str.lastIndexOf("l")); //3
// console.log(str.lastIndexOf("p")); // -1
// console.log(str.indexOf("h")); //0

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr[i].name.length; j++) {
    if (arr[i].name[j] === "t") {
      count++;
    }
  }

  //   count >= 2 && console.log(arr[i]);
}

// let str = "salam";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// 5) "name"-i en uzun olan obyekti tapin
function findObj(array) {
  let max = 0;
  let elem;
  arr.forEach((item) => {
    if (max < item.name.length) {
      elem = item;
    }
  });
  return elem;
}
console.log(findObj(arr));

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

function findObjSqrt(array) {
  let max = 0;
  let elem;
  arr.forEach((item, index) => {
    if (max < item.name.length) {
      max = item.name.length;
      elem = index;
    }
  });
  return elem ** 2;
}
console.log(findObjSqrt(arr));
