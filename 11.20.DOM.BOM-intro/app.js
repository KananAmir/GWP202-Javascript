// BOM - browser object model
// DOM - document object model

console.log(this);

let userObject = {
  userName: "Jhon Doe",
  //   sayHi() {},
  //   sayHi: function () {
  //     console.log(this);
  //   },
  sayHi: () => {
    console.log(this);
  },
};

userObject.sayHi();

// JS Timing

//setTimeOut vs setInterval

// let timeout = window.setTimeout(() => {
//   console.log("hello gwp202");
// }, 3000);

// setTimeout(() => {
//   clearTimeout(timeout);
// }, 4000);

// setInveral

// let interval = setInterval(() => {
//   console.log("hello gdu");
// }, 100);

// setTimeout(() => {
//   clearInterval();
// }, 50000);

let count = 0;
let interval = setInterval(() => {
  console.log(++count);

  if (count === 100) {
    clearInterval(interval);
  }
}, 100);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);
