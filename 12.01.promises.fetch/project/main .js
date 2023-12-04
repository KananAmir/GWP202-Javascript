const products = document.querySelector(".products");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");

const BASE_URL = `https://northwind.vercel.app/api`;

fetch(`${BASE_URL}/customers`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    drawCards(data);
  })
  .catch((err) => console.log(err));

function drawCards(array) {
  products.innerHTML = "";
  array.forEach((element) => {
    products.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 mb-4 card-info">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${element.companyName}</h5>
            <p class="card-text">
              ${element.contactTitle}
            </p>
            <p class="card-text">
              Street: ${element.address.street}
            </p>
            <p class="card-text">
              Address: ${element.address.city}, ${element.address.country}
            </p>
            <button href="#" class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>DELETE</button>
          </div>
        </div>
      </div>
        `;
  });
}

// function deleteCustomer(id) {
//   fetch(`${BASE_URL}/customers/${id}`, {
//     method: "DELETE",
//   }).then(() => {
//     fetch(`${BASE_URL}/customers`)
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         drawCards(data);
//       })
//       .catch((err) => console.log(err));
//   });
// }

function deleteCustomer(id, btn) {
  if (confirm("Are u sure to delete customer??")) {
    fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
    });
    //   console.log(btn);
    //   btn.parentElement.parentElement.parentElement.remove();
    btn.closest(".card-info").remove();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    companyName: allInputs[0].value,
    contactTitle: allInputs[1].value,
    address: {
      street: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
    },
  };

  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`${BASE_URL}/customers`)
      .then((response) => response.json())
      .then((data) => {
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });

  allInputs.forEach((item) => (item.value = ""));
});
