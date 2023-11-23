// -submit
// -change
// -input

// let userName = document.querySelector("#username");

//input
// userName.addEventListener("input", function (event) {
//   console.log(event.target.value);
// });

// change
// userName.addEventListener("change", function (event) {
//   console.log("change event");
//   console.log(event.target.value);
// });

//submit

let email = document.querySelector("#emailInput");
let password = document.querySelector("#passwordInput");
let check = document.querySelector("#checkInput");
let form = document.querySelector("#userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log("submit");
  //   console.log(email.value);
  //   console.log(password.value);
  //   console.log(check.checked);

  if (email.value !== "" && password.value !== "") {
    let user = {
      email: email.value,
      password: password.value,
      checked: check.checked,
    };

    console.log(user);

    email.value = "";
    password.value = "";
  } else {
    alert("input fileds can not empty!!");
  }
});
