let arr = [3, 8, 2, 5, 4, 10, 7, [1, 22, 3]];

let a = [...arr];
// arr.length = 0;
// arr.length = 3;
console.log(arr);
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(i);
//     // newArr.push(i);
//   }
// }

// console.log(newArr);

// # Verilmiş ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

let bool = false;
let num = 100;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    bool = true;
    break;
  }
}

bool
  ? console.log(`${num} array daxilində var`)
  : console.log("baxdığımız ədəd array daxilində yoxdur!");

//object litheral
let obj = {
  name: "Lorem",
  email: "lorem@gmail.com",
  age: 44,
};

// constructure
let user = new Object();

user.fullName = "Jhon Doe";
console.log(user);
console.log(obj.email);
console.log(obj["email"]);

delete obj.name;

console.log(obj);
