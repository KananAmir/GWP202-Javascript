// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// // task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleText =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// let count = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//   sampleNews[i] === " " && count++;
// }

// console.log(count);
// let newArr = [];
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// for (let i = 0; i < countries.length; i++) {
//   //   console.log(countries[i]);
//   countries[i][0].toLocaleLowerCase() === "a" &&
//     countries[i][countries[i].length - 1] === "a" &&
//     newArr.push(countries[i]);
// }

// console.log(newArr);

let filteredEmployees = [];
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

for (let i = 0; i < employees.length; i++) {
  //   console.log(employees[i]);
  employees[i].salary > 60000 && filteredEmployees.push(employees[i]);
}

console.log(filteredEmployees);
