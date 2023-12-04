// promise

//pending, fullfilled, rejected states
let promise = new Promise((resolve, reject) => {
  let age = 16;

  if (age >= 18) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});

// console.log(promise);

//then, catch, finally

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally block worked");
//   });

// promise
//   .then(
//     (response) => {
//       console.log(response);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .finally(() => {
//     console.log("finally block worked");
//   });

//promise chaning

// let myPromise = new Promise((resolve, reject) => {
//   const students = ["Aziza", "Sabina", "Sahana", "Qanira", "Arkinaz"];

//   if (students.length > 0) {
//     resolve(students);
//   } else {
//     reject("FAILED");
//   }
// });

myPromise
  .then((response) => {
    response.length = 3;
    return response;
  })
  .then((data) => {
    data.pop();
    return data;
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

//callbak hell
