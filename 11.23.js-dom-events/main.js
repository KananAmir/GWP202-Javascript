let clickMe = document.querySelector(".click-me");
let box = document.querySelector(".box");
let bgTeal = document.querySelector(".bg-teal");

//MOUSE EVENTS
//click
clickMe.addEventListener("click", function (event) {
  //   console.log(event);
  box.classList.toggle("bg-red");
});

//contextmenu
clickMe.addEventListener("contextmenu", function (event) {
  console.log("contextmenu event worked");
});

// -mouseDown

// bgTeal.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });

// -MouseUp
// bgTeal.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

// -mouseover

// bgTeal.addEventListener("mouseover", function (e) {
//   console.log("mouseover");
// });

// -mousemove

// bgTeal.addEventListener("mousemove", function (e) {
//   console.log("mousemove");
// });

// -mouseenter
// bgTeal.addEventListener("mouseenter", function (e) {
//   console.log("mouseenter");
//   log
// });

// -mouseout
bgTeal.addEventListener("mouseout", function () {
  console.log("mouseout");
});

//KEYBOARD EVENTS

// -keydown
// -keyup

window.addEventListener("keydown", function (event) {
  //   console.log("keydown");
  console.log(event.code);
});

let alpha = 0;
window.addEventListener("keyup", function (event) {
  //   console.log(event);
  //   console.log(event.code);
  //   console.log(event.keyCode);
  //   console.log("keyup");

  if (event.code === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  } else if (event.code === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  }

  //   document.body.style.backgroundColor = `rgba(0,0,255,${alpha})`;
});

// document.querySelector("#username").addEventListener("keyup", function (event) {
//   //   console.log(event.target);
//   console.log(event.target.value);
// });

let user = document.querySelector("#username");

// -focus
// -blur

user.addEventListener("focus", function () {
  console.log("focus event worked");
  this.style.backgroundColor = "teal";
});
user.addEventListener("blur", function () {
  console.log("blur event worked");
  this.style.backgroundColor = "red";
  this.style.color = "white";
});
