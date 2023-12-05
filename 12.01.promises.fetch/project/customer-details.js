let id = new URLSearchParams(window.location.search).get("id");

console.log(id);

const BASE_URL = `https://northwind.vercel.app/api`;
const customerDetails = document.querySelector(".customer-details");

fetch(`${BASE_URL}/customers/${id}`)
  .then((res) => res.json())
  .then((data) => {
    customerDetails.innerHTML = `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${data.companyName}</h5>
        <p class="card-text">
         ${data.contactTitle}
        </p>
        <p class="card-text">
        Address:  ${data.address?.street}, ${data.address?.city}, ${data.address?.country}
        </p>
        <button class="btn btn-primary" onclick=goBack()>Go Back</button>
      </div>
    </div>
  </div>
    `;
  });

function goBack() {
  window.history.back();
}
