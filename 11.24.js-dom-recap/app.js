// scroll, onload and onunload Events

// window.addEventListener("load", function () {
//   console.log("home page, load event worked");
// });

window.addEventListener("unload", function () {
  console.log("home page, unload event worked");
});

//DOMContentLoaded vs load

// window.addEventListener("DOMContentLoaded", function () {
//   console.log("home page , DOMContentLoaded event worked");
// });

//scroll

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  //   console.log("gwp");
  //   console.log(window.scrollY);

  //   window.scrollY > 0
  //     ? header.classList.add("header-scroll")
  //     : header.classList.remove("header-scroll");

  header.classList.toggle("header-scroll", window.scrollY > 0);
});
