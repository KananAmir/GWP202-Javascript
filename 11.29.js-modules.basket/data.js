// export const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Bayram", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// export const BASE_URL = `https://northwind.vercel.app/api/`;

// export default function getData(data) {
//   return data;
// }

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

const BASE_URL = `https://northwind.vercel.app/api/`;

function getData(data) {
  return data;
}

export { employees, BASE_URL };

export default getData;
