const BASE_URL = ` http://localhost:8080`;

function setProductToLocaleStorage(favs) {
  localStorage.setItem("favs", JSON.stringify(favs));
}

function getFavsFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) || [];
}
