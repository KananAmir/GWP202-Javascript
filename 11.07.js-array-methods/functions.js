// (function () {
//   console.log(" i am anonim function");
// })();

// (function (user) {
//   console.log(` i am ${user}`);
// })("qanira");

//high order function
function myFunc(cb, user) {
  cb(user);
}

// let callback = () => {
//   console.log("I am callback");
// };

// myFunc(() => {
//   console.log("I am callback");
// });

//calback
let callback = (user = "test") => {
  console.log(`I am ${user}`);
};

myFunc((user = "test") => {
  console.log(`I am ${user}`);
}, "Jhon Doe");
