const BASE_URL = `http://localhost:8080`;
const tBody = document.querySelector("tbody");

async function getAllMenus() {
  const response = await axios(`${BASE_URL}/menus`);
  console.log(response.data);
  drawTable(response.data);
}

getAllMenus();

function drawTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    <td>${element.id}</td>
    <td>${element.title}</td>
    <td>${element.desc}</td>
    <td>${element.category}</td>
    <td>${element.price}</td>
    <td><button onclick=deleteMenu("${element.id}",this)>delete</button></td>
    `;

    tBody.append(trElem);
  });
}

async function deleteMenu(id, btn) {
  if (alert("r u sure to delete menu??")) {
    let response = await axios.delete(`${BASE_URL}/menus/${id}`);
    if (response.status === 200) {
      btn.closest("tr").remove();
    }
  }
}
