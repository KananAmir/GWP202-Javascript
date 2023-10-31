//Template litherals/strings

let firstName = "Jhon";
let lastName = "Doe";

//Jhon Doe

// console.log(firstName + " " + lastName);

// console.log(`3+2 = ${3+2}`);
// console.log(`sum of ${a} and ${b} = ${a + b}`);

let a = 3;
let b = 2;

// console.log(`${firstName} - ${lastName}`);

//conditional
//if else

// let number = 7;
// if (number >= 0) {
//   console.log(`${number} is positive number or equal to zero`);
// } else {
//   console.log(`${number} is negative number`);
// }

// if (number > 0) {
//   console.log(`${number} is poitve number`);
// } else if (number < 0) {
//   console.log(`${number} is negative number`);
// } else if (number === 0) {
//   console.log(`${number} is equal to zero`);
// }

let userName = "Aziza";

console.log(userName.length); // 5

let userAge = 22;

// let city = "Ganja";
let city = "London";
// if (userAge >= 18 && userName.length > 7) {
//   console.log(`Wellcome ${userName}`);
// }

if (userAge >= 18) {
  if (city === "Ganja") {
    console.log(`Wellcome ${userName}`);
  } else {
    console.log("age is okay but city is not okay");
  }
} else {
  console.log(`${userName} u are smaller then`);
}

// switch case

let weekDay = 50;

switch (weekDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    //   case 20:
    //   case 30:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
  case 50:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("There is no such week day!");
    break;
}


