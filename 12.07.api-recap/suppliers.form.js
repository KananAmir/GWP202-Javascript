const id = new URLSearchParams(window.location.search).get("id");
const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

// console.log(id);
const BASE_URL = `https://northwind.vercel.app/api`;

async function getSupplier() {
  try {
    let response = await axios(`${BASE_URL}/suppliers/${id}`);
    console.log(response.data);
    allInputs[0].value = response.data.companyName;
    allInputs[1].value = response.data.address?.street;
    allInputs[2].value = response.data.address?.phone;
    allInputs[3].value = response.data.address?.city;
    allInputs[4].value = response.data.address?.country;
  } catch (error) {
    console.log(error);
  }
}

id && getSupplier();

// if (id) {
//   getSupplier();
// }

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const supplier = {
    companyName: allInputs[0].value,
    address: {
      street: allInputs[1].value,
      phone: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
    },
  };

  if (
    allInputs[0].value &&
    allInputs[1].value &&
    allInputs[2].value &&
    allInputs[3].value &&
    allInputs[4].value
  ) {
    if (!id) {
      addSupplier(supplier);
    } else {
      updateSupplier(supplier);
    }
  } else {
    alert("fill all fields!!");
  }

  allInputs.forEach((item) => (item.value = ""));
});

async function addSupplier(obj) {
  await axios.post(`${BASE_URL}/suppliers`, obj);
  window.location = "suppliers.html";
}
async function updateSupplier(obj) {
  await axios.patch(`${BASE_URL}/suppliers/${id}`, obj);
  window.location = "suppliers.html";
}
