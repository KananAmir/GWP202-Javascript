let list = document.querySelector(".list");
let btn = document.querySelector(".create");
let remove = document.querySelector(".remove");
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

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

window.localStorage.setItem("web-techs", JSON.stringify(webTechs));
setTimeout(() => {
  console.log(JSON.parse(localStorage.getItem("web-techs")));
}, 3000);

btn.addEventListener("click", function () {
  list.innerHTML = "";
  JSON.parse(localStorage.getItem("web-techs")).forEach((element) => {
    list.innerHTML += `<li>${element}</li>`;
  });
});

remove.addEventListener("click", function () {
  localStorage.clear();
  list.innerHTML = "";
});
