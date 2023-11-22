let username = document.getElementById("username");
let age = document.getElementById("age");
let submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  console.log(Number(username.value));
  console.log(+age.value);
});

// children
// closest

let cont = document.querySelector(".container");
let box = document.querySelector(".box");

console.log(cont.children[0]);
console.log(cont.children[cont.children.length - 1]);

console.log(box.closest("div"));
console.log("sbling", box.nextElementSibling);
