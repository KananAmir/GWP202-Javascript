let wellcome = document.querySelector(".user");

let userName = localStorage.getItem("userName");

wellcome.innerText = `Wellcome ${userName}`;
