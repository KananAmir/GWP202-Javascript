let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

//1. remove dublicated values

// result: [1, 2, 4, 3, 5, 7, 6];

// I. solution
// let result = arr.filter((item, index) => arr.indexOf(item) === index);

// II. solution

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   !result.includes(arr[i]) && result.push(arr[i]);
// }
// let result = [];

// arr.forEach((item) => {
//   !result.includes(item) && result.push(item);
// });

// III. solution

let newArr = [...new Set(arr)];
console.log(newArr);

//2. Yuxaridaki arrayda hər hansı ədədin neçe defe tekrarlandigini tapan funksiya yazın

function findCountDigitOfArray(array, number) {
  let count = 0;
  array.forEach((element) => {
    element === number && count++;
  });

  return `${number} ededi ${count} defe tekrarlanir`;
}

console.log(findCountDigitOfArray(arr, 7)); // 7 ədədi 2 dəfə təkrarlanır
console.log(findCountDigitOfArray(arr, 2)); // 2 ədədi 4 dəfə təkrarlanır

//3. generate otp (4 rəqəmli otp kodu yaradan funksiya yazın)
// Math.floor(Math.random()*9000 + 1000)

// function generateOtp() {
//   let otp = "";
//   for (let i = 0; i < 4; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   return otp;
// }

function generateOtp() {
  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

console.log(generateOtp()); //1532
console.log(generateOtp()); //6834
console.log(generateOtp()); //6396

let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];

//4. find all truth values in myArr

// console.log(myArr.filter((item) => Boolean(item)));// all truth values
console.log(myArr.filter(Boolean)); // all truth values

// console.log(myArr.filter((item) => !Boolean(item))); // all falsy values

//5. Arraydaki en boyuk reqemi tapan ve nece defe tekrarlandigini gosteren funksiya yazın

function findMaxDigitCount(array) {
  let max = Math.max(...array);
  let count = 0;
  array.forEach((element) => {
    element === max && count++;
  });
  return `max ədəd ${max} dir və ${count} dəfə təkrarlanır`;
}

console.log(findMaxDigitCount(arr)); // max ədəd 7 dir və 2 dəfə təkrarlanır
