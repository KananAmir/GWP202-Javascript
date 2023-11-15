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

// let first = webTechs[0];
// let second = webTechs[1];
// let third = webTechs[2];

//array destructing

// let [first, second, third] = webTechs;

// let [first, ,second, ,third] = webTechs;

let [first, second, third, ...qalanlar] = webTechs;

console.log(first, second, third);
console.log(qalanlar);

// object destructing

const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 250,
  country: "Azerbaijan",
  city: "Ganja",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
};
// country = person.country;
// let skills = person.skills;

// let { country, city, skills } = person;
let { country, city: sheher, skills: bacariqlar } = person;
console.log(skills);
// console.log(bacariqlar);
// console.log(sheher);
