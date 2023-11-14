//object litheral

let userObject = {
  name: "Laman",
  email: "laman@gmmail.com",
  komputer: {
    kompName: "asus",
    prise: 2400,
  },
};

// let newObj = structuredClone(userObject);

// let newObj = userObject; //shallow copy
let newObj = { ...userObject }; // deep copy
userObject.komputer.kompName = "lenova";

userObject.name = "Sama";

console.log(userObject);
console.log(newObj);




