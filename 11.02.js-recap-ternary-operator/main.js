//Math

// floor;
// ceil;
// round;
// trunc;
// min;
// max;
// sign;
// pow;
// sqrt;
// abs;
// random;

// let number = 15.27;

// console.log(Math.floor(number)); //15
// console.log(Math.ceil(number)); //16
// console.log(Math.round(number)); //15
// console.log(Math.trunc(18.463)); // 18

// console.log("MIN: ", Math.min(45, 23, 98, 4)); // 4
// console.log("MAX: ", Math.max(45, 23, 98, 4)); // 98

// console.log(Math.sign(-23)); //-1
// console.log(Math.sign(23)); //1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign()); // NaN

// console.log(Math.pow(3, 5)); //243
// console.log(Math.pow(4, 3)); //64

// console.log(Math.sqrt(49)); //7
// console.log(Math.abs(-32)); //32

//generate random values

// console.log(Math.floor(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

// Math.round(Math.random() * (max-min) + min);

//generate random digits bw 30-40
console.log(Math.round(Math.random() * 10 + 30));

let userAge = 27;

// if (userAge >= 18) {
//   console.log("wellcome");
// } else {
//   console.log("ur age is a bit litte");
// }

userAge >= 18 ? console.log("wellcome") : console.log("ur age is a bit litte");

// userAge >= 18 && console.log("wellcome");
