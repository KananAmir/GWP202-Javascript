let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
];

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

console.log(employees.filter((item) => item.salary > 60000));
console.log(employees.filter((item) => item.name === "Bayram"));
console.log(employees.find((item) => item.name === "Bayram"));
