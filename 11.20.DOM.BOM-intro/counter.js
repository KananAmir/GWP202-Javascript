let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector(".counter");

result.style.color = "red";

let count = 0;
// startBtn.addEventListener("click", function () {
//   //   console.log("start btn clicked");
//   count++;
//   result.innerText = count;
// });
// stopBtn.addEventListener("click", function () {
//   console.log("stop btn clicked");
//   count--;
//   result.innerText = count;
// });

// let countInterval;
// startBtn.addEventListener("click", function () {
//   clearInterval(countInterval);

//   countInterval = setInterval(() => {
//     count++;
//     result.innerText = count;
//   }, 100);
// });

// stopBtn.addEventListener("click", function () {
//   clearInterval(countInterval);
// });
// resetBtn.addEventListener("click", function () {
//   clearInterval(countInterval);
//   count = 0;
//   result.innerText = 0;
// });

let countInterval;

startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  stopBtn.removeAttribute("disabled");

  countInterval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  this.setAttribute("disabled", null);
  startBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = count;
  clearInterval(countInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});
