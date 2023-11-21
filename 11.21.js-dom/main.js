// setTimeout(() => {
//   console.log("hello gwp202");
// }, 2000);

// let testFunc = (userName) => {
//   console.log(`Hello ${userName}`);
// };

// setTimeout(testFunc, 2000, "Shahana");

// setTimeout(
//   (a, b) => {
//     console.log(a + b);
//   },
//   3000,
//   4,
//   12
// );

let heading = document.querySelector("#heading");

// console.log(heading.innerText);

heading.style.color = "red";

//attribute- setAttribute, removeAttribute, hasAttribute, getAttribute

//setAttribute
heading.setAttribute("class", "bg-teal");
heading.setAttribute("title", "gwp 202");

//getAttribute

console.log(heading.getAttribute("class"));
console.log(heading.getAttribute("title"));

//hasAtrribute
console.log(heading.hasAttribute("title")); //true
console.log(heading.hasAttribute("href")); //false

//removeAttribute
document.querySelector(".remove-attr").addEventListener("click", function () {
  heading.removeAttribute("class");
});

//classlist (add, remove, contains, toogle)

let parag = document.querySelector(".text.lorem");
let box = document.querySelector(".box");
let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".remove");
let customToggle = document.querySelector(".custom-toggle");
let toggle = document.querySelector(".toggle");

// console.log(parag.classList);

addBtn.addEventListener("click", function () {
  box.classList.add("bg-red", "size");
});

removeBtn.addEventListener("click", function () {
  box.classList.remove("bg-red", "size");
});

customToggle.addEventListener("click", function () {
  box.classList.contains("bg-red")
    ? box.classList.remove("bg-red", "size")
    : box.classList.add("bg-red", "size");
});

toggle.addEventListener("click", function () {
  box.classList.toggle("bg-red");
  box.classList.toggle("size");
});

console.log(parag.classList.contains("test")); //false
console.log(parag.classList.contains("text")); //true
console.log(parag.classList.contains("ipsum")); //true

//className

// console.log(parag.className);
parag.className += " test";
console.log(parag.className);

//addeventListener vs onclick

let clickBtn = document.getElementById("click");

clickBtn.addEventListener("click", function () {
  console.log("addeventlister");
});

clickBtn.addEventListener("click", function () {
  console.log("addeventlister again");
});

clickBtn.onclick = function () {
  console.log("onclick property");
};

clickBtn.onclick = function () {
  console.log("onclick property again");
};

// let user = {
//   userName: "Sabina",
//   uni: "GDU",
// };

// user.userName = "Aziza";
// user.userName = "Sama";

// console.log(user);

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

let ulElem = document.querySelector(".list");
ulElem.style.listStyle = "none";

employees.forEach((item, i) => {
  let liElem = document.createElement("li");
  liElem.innerText = `${i}. ${item.name}`;

  ulElem.append(liElem);

  liElem.addEventListener("click", function () {
    this.remove();
  });
});

// heading.remove();

// document.querySelectorAll("li").forEach((item) => {
//   item.addEventListener("click", function () {
//     // console.log(this.innerText);
//     // this.innerText = "";
//     // this.style.display = "none";
//     this.remove();
//   });
// });

console.log(document.querySelectorAll("li"));

//parentElement

// console.log(box.parentElement);
// console.log(box.parentElement.parentElement);

console.log(document.querySelector(".container").firstElementChild);
console.log(document.querySelector(".container").lastElementChild);
