// function isPalidrom(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }

//   return str === newStr ? "is polidrom" : "is not polidrom";
// }

function isPalidrom(str) {
  let newStr = str.split("").reverse().join("");
  return str === newStr ? "is polidrom" : "is not polidrom";
}

console.log(isPalidrom("mələk")); // is not polidrom
console.log(isPalidrom("kələk")); // is palidrom
