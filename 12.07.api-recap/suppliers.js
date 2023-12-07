// CRUD - create, read, update, delete
const tBody = document.querySelector("tbody");
const loading = document.querySelector(".loading");
const loadingOverlay = document.querySelector("#loading-overlay");
const search = document.querySelector("#search");
const sort = document.querySelector(".sort");

const BASE_URL = `https://northwind.vercel.app/api`;

let suppliers = null;
let suppliersCopy = null;

(async () => {
  let response = await axios(`${BASE_URL}/suppliers`);
  suppliers = response.data;
  suppliersCopy = structuredClone(suppliers);
})();

async function getData(endpoint) {
  loadingOverlay.classList.add("open");
  let response = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(response.data);
  loadingOverlay.classList.remove("open");
  drawTable(response.data);
}

getData("suppliers");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address?.city}, ${element.address?.country}</td>
    <td><a class="btn btn-success" href="suppliers-form.html?id=${element.id}">Edit</a></td>
    <td><button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button></td>
    `;

    tBody.append(trElem);
  });
}

async function deleteSupplier(id, btn) {
  if (confirm("are u sure to delete supplier??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/suppliers/${id}`);
    //   await getData("suppliers");
  }
}

// search.addEventListener("input", async function (event) {
//   let response = await axios(`${BASE_URL}/suppliers`);
//   let filtered = response.data.filter((item) =>
//     item.companyName
//       .toLocaleLowerCase()
//       .includes(event.target.value.toLocaleLowerCase())
//   );
//   drawTable(filtered);
// });

search.addEventListener("input", function (event) {
  let filtered = suppliers.filter((item) =>
    item.companyName
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawTable(filtered);
});

sort.addEventListener("click", function () {
  let sorted;
  if (this.innerText === "Ascending") {
    sorted = suppliers.sort((a, b) => a.id - b.id);
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = suppliers.sort((a, b) => b.id - a.id);

    this.innerText = "Default";
  } else {
    sorted = suppliersCopy;
    this.innerText = "Ascending";
  }

  drawTable(sorted);
});
