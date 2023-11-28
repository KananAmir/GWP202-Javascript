const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

menu.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
