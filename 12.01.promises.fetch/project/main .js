const products = document.querySelector(".products");
const customerBtn = document.querySelector(".customer-btn");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");
let editStatus = false;
let editId = null;
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
            <h5 class="card-title company">${element.companyName}</h5>
            <p class="card-text title">
              ${element.contactTitle}
            </p>
            <p class="card-text">
              Street: <span class="street">${element.address?.street}</span>
            </p>
            <p class="card-text">
              Address: <span class="city">${element.address?.city}</span>, <span class="country">${element.address?.country}</span>
            </p>
            <button href="#" class="btn btn-success" onclick=editCustomer("${element.id}",this)>EDIT</button>
            <button href="#" class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>DELETE</button>
            <a href="./customer-details.html?id=${element.id}" class="btn btn-primary">DETAILS</a>
          </div>
        </div>
      </div>
        `;
  });
}

function deleteCustomer(id) {
  fetch(`${BASE_URL}/customers/${id}`, {
    method: "DELETE",
  }).then(() => {
    fetch(`${BASE_URL}/customers`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });
}

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

  if (!editStatus) {
    if (
      allInputs[0].value &&
      allInputs[1].value &&
      allInputs[2].value &&
      allInputs[3].value &&
      allInputs[4].value
    ) {
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
    } else {
      alert("all inputs should be filled!!");
    }
  } else {
    fetch(`${BASE_URL}/customers/${editId}`, {
      method: "PATCH",
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

    editStatus = false;
    customerBtn.innerText = "Add";
  }

  allInputs.forEach((item) => (item.value = ""));
});

function editCustomer(id, btn) {
  customerBtn.innerText = "Edit";
  editId = id;
  editStatus = true;
  console.log(editId);
  // console.log(id);
  // fetch(`${BASE_URL}/customers/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     allInputs[0].value = data.companyName;
  //     allInputs[1].value = data.contactTitle;
  //     allInputs[2].value = data.address?.street;
  //     allInputs[3].value = data.address?.city;
  //     allInputs[4].value = data.address?.country;
  //   });

  // console.log(btn.parentElement.children[0].textContent);

  // console.log(btn.parentElement.querySelector(".company").innerText);

  allInputs[0].value = btn.parentElement.querySelector(".company").innerText;
  allInputs[1].value = btn.parentElement.querySelector(".title").innerText;
  allInputs[2].value = btn.parentElement.querySelector(".street").innerText;
  allInputs[3].value = btn.parentElement.querySelector(".city").innerText;
  allInputs[4].value = btn.parentElement.querySelector(".country").innerText;
}
