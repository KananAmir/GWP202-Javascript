//js storages

//localStorage, sessionStorage, cookies

//localStorage

//setItem
//getItem
//removeItem
//clear
//key

// localStorage.setItem("className", "GWP202");
// localStorage.setItem("number", 11);
localStorage.setItem("bool", false);

// console.log(localStorage.getItem("className"));
// console.log(localStorage.getItem("number"));
console.log(typeof localStorage.getItem("bool"));
console.log(typeof JSON.parse(localStorage.getItem("bool")));

// localStorage.removeItem("className");
// localStorage.removeItem("number");

// localStorage.clear();

// console.log(localStorage.key(0));
// console.log(localStorage.key(1));

// console.log(localStorage.getItem("className"));

const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "Redux",
  "Node",
  "JS",
  "MongDB",
];

// console.log(localStorage.getItem("web techs"));

//JSON stringify, JSON parse

// console.log(JSON.stringify(webTechs));

localStorage.setItem("web-techs", JSON.stringify(webTechs));

// console.log(localStorage.getItem("web-techs"));

console.log(JSON.parse(localStorage.getItem("web-techs")));

// const products = [
//   { name: "one Product 1", price: 20, category: "electronics" },
//   { name: "two Product 2", price: 30, category: "Clothes" },
//   { name: "three Product 3", price: 40, category: "Electronics" },
//   { name: "four Product 4", price: 50, category: "Clothes" },
//   { name: "five Product 5", price: 60, category: "Clothes" },
//   { name: "six Product 6", price: 70, category: "Electronics" },
//   { name: "seven Product 7", price: 80, category: "Clothes" },
//   { name: "eight Product 8", price: 90, category: "electronics" },
// ];

let userObject = {
  userName: "Jhon Doe",
  email: "jhon@gmail.com",
  age: 88,
};

// console.log(userObject.toString());
localStorage.setItem("userObj", JSON.stringify(userObject));

console.log(JSON.parse(localStorage.getItem("userObj")));

//sessionStorage

//setItem
//getItem
//removeItem
//clear
//key

// sessionStorage.setItem("city", "Ganja");
// sessionStorage.setItem("university", "GDU");

// setTimeout(() => {
//   //   sessionStorage.removeItem("city");
//   //   sessionStorage.clear();
//   console.log(sessionStorage.getItem("city"));
// }, 3000);

//cookies

document.cookie = "city=Ganja; expires=Mon, 27 Nov 2023 11:41:05 GMT; path=/";
console.log(document.cookie);
