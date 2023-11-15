//object litheral

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
  isMarried: false,
  //   getPersonInfo() {
  //     return `I am ${this.firstName} ${this.lastName}. I am ${this.age}. I am from ${this.country}`;
  //   },
  getPersonInfo: function () {
    return `I am ${this.firstName} ${this.lastName}. I am ${this.age}. I am from ${this.country}`;
  },

  //   getPersonInfo: () => {
  //     return `I am ${this.firstName} ${this.lastName}. I am ${this.age}. I am from ${this.country}`;
  //   },
};

// console.log(this);

console.log(person.getPersonInfo());
// person.phoneNumber = 11223344;
person["phone number"] = 11223344;
// console.log(person);
// console.log(person.country);
// console.log(person["country"]);
//constructure

let obj = new Object();

obj.name = "Lorem Ipsum";
obj.age = 44;
// console.log(obj);

// let newPerson = person; //shallow copy

// let newPerson = { ...person }; //deep copy

// let newPerson = structuredClone(person);
// delete newPerson.isMarried;

// newPerson.skills.pop();

// console.log("newPerson", newPerson);
// console.log("person", person);

//object methods

let student = {
  fullName: "Lorem Ipsum",
  age: 18,
  university: "GDU",
  city: "Ganja",
  compInfo: {
    compName: "ASUS",
    price: 2000,
  },
};

//assign

let testObj = { a: "salam" };
// let newStudent = Object.assign({}, student);
// let newStudent = Object.assign({ a: "salam" }, student);
let newStudent = Object.assign(testObj, student);

console.log(newStudent);

// keys

console.log(Object.keys(person));
//values

console.log(Object.values(person));

//entries
console.log(Object.entries(person));


//hasOwnPropert

console.log(student.hasOwnProperty("city")); //true
console.log(student.hasOwnProperty("country")); //false
console.log(student.hasOwnProperty("skills")); //false
console.log(student.hasOwnProperty("university")); //true