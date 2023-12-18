let userInfo = document.getElementById("user-info");
let search = document.getElementById("search");

// fetching user data
let url = "https://randomuser.me/api/?results=100";


let users = [];
async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    users = data.results;
    userInfo.innerHTML = "";
    data.results.forEach((q) => {
      createUser(
        q.picture?.thumbnail,
        q.name?.first,
        q.name?.last,
        q.location?.city,
        q.location?.country
      );
    });
  } catch (error) {
    throw new Error(error);
  }
}

getData();

// creating user
function createUser(src, first, last, city, country) {
  let liElement = document.createElement("li");

  let imgElement = document.createElement("img");
  let divElement = document.createElement("div");
  let headingElement = document.createElement("h4");
  let spanElement = document.createElement("span");

  imgElement.src = `${src}`;
  headingElement.innerHTML = `${first} ${last}`;
  spanElement.innerText = `${city}, ${country}`;

  divElement.append(headingElement, spanElement);
  liElement.append(imgElement, divElement);
  userInfo.appendChild(liElement);

  userInfo.classList.add("user-info");
  divElement.classList.add("user-info-content");
}

//filter by name or location
search.addEventListener("input", function (e) {
  userInfo.innerHTML = "";
  let value = e.target.value.toLowerCase();
  let filteredUsers = users.filter(
    (q) =>
      (q.name.first + " " + q.name.last).toLowerCase().includes(value) ||
      (q.location.city + " " + q.location.country).toLowerCase().includes(value)
  );

  filteredUsers.forEach((q) => {
    createUser(
      q.picture?.thumbnail,
      q.name?.first,
      q.name?.last,
      q.location?.city,
      q.location?.country
    );
  });
});
