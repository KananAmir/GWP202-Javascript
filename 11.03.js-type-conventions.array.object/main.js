//prompt, alert, confirm

//alert
// alert("hello world!");

//prompt
// let userName = prompt("Enter ur name here, psl!!");
// let userName = prompt("Enter ur name here, psl!!", "Jhon Doe");

// console.log(userName);

//confirm

// let bool = confirm("Are u sure to delete product?!");

// console.log(bool);

// bool === true ? console.log("deleted") : console.log("do not delete");

//TYPE CONVERTIONS

//null, undefined, NaN, "", 0, -0, false

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof NaN); //number

// implicit vs explicit

// console.log("5" - 2); // 3
console.log(typeof ("5" - 2)); // 3 - type number
console.log("5" + 2); // 52
console.log(5 - "-2"); // 7
console.log("5" * 2); // 10
console.log(5 - "2"); // 3
console.log("5" % 2); // 1
console.log(5 / "2"); // 2.5
console.log("5a" * 2); // NaN

console.log(true + true); //2
console.log(true + false); //1
console.log(7 + false); //7
console.log("7" + 0); //"70"
console.log("7" + true); //"7true"
console.log("7" + false); //"7false"
console.log(8 + "false"); //"8false"

// !! - operator // returns true or false
// console.log(!!"salam"); // true
// console.log(!!NaN); // false
// console.log(!!null); // false
// console.log(!!76); // true
// console.log(!!""); // false

// console.log("" + 88); // "88"
// console.log(+"88"); // 88
//explicit type conventions

//Boolean
//Number
//String

console.log(Boolean(55)); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Number("66")); //66
console.log(Number(null)); //0
console.log(Number("")); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("7b")); //NaN
console.log(Number("75.3")); // 75.3
console.log(Number("75,3")); // NaN

console.log(String(true));
console.log(String(77));
console.log(String(undefined));

console.log(parseInt("88")); //88
console.log(parseInt("17.15")); // 17
console.log(parseInt("17,15")); // 17
console.log(parseInt(1101, 2)); //
console.log(parseInt("1C", 16)); //28
console.log(parseInt(34.5)); // 34

console.log(parseInt("777b8")); // 7
console.log(parseInt("b7")); // NaN
console.log(parseInt("15")); // NaN

console.log(parseFloat(23.45)); //23.45
console.log(parseFloat("-23.45")); //-23.45
console.log(parseFloat("-23,45")); //23

//toString

let num = 31;
console.log(num.toString()); //"31"
console.log(num.toString(2)); //11111
console.log(num.toString(16)); //1f
