let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = allUsers.find(
    (item) =>
      item.userName === allInputs[0].value &&
      item.password === allInputs[1].value
  );
  console.log(user);

  if (user) {
    localStorage.setItem("userName", user.userName);
    window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }
  //   console.log(allInputs[0].value);
  //   console.log(allInputs[1].value);
});
