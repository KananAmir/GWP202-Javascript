const BASE_URL = `http://localhost:8080`;
const allMenus = document.querySelector(".all-menus");
const allMenuBtns = document.querySelectorAll(".menu-btns .menu-btn");
let menusCopy = [];

async function getAllMenus() {
  const response = await axios(`${BASE_URL}/menus`);
  //   console.log(response.data);
  menusCopy = response.data;
  let filtered = response.data.filter((item) => item.category === "breakfast");
  //   console.log(filtered);
  drawMenus(filtered);
}

getAllMenus();

function drawMenus(data) {
  allMenus.innerHTML = "";
  data.forEach((element) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
        <h4>${element.title}</h4>
        <div class="menu-info">
        <p>
        ${element.desc}
        </p>
        <p>...............................</p>
        <p>${element.price}</p>
        </div>
        `;
    allMenus.append(menuItem);

    //     allMenus.innerHTML += `
    //     <div class="menu-item">
    //     <h4>${element.title}</h4>
    //     <div class="menu-info">
    //     <p>
    //     ${element.desc}
    //     </p>
    //     <p>...............................</p>
    //     <p>${element.price}</p>
    //     </div>
    //   </div>
    //     `;
  });
}

allMenuBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log(this.textContent);
    let filtered = menusCopy.filter(
      (item) =>
        item.category.toLocaleLowerCase() ===
        this.textContent.toLocaleLowerCase()
    );

    // console.log(filtered);
    drawMenus(filtered);

    document.querySelector(".menu-btn.active").classList.remove("active");
    this.classList.add("active");
  });
});
