const productCardLists = document.querySelector(".product-card-lists");

let favProducts = getFavsFromLocaleStorage();
let products = [];
async function getAllProducts() {
  try {
    const res = await axios(`${BASE_URL}/products`);
    //   console.log(res.data);
    products = res.data;
    drawProductCards(res.data);
  } catch (error) {
    console.log(error);
  }
}

getAllProducts();

function drawProductCards(data) {
  productCardLists.innerHTML = "";

  data.forEach((element) => {
    const productCardElement = document.createElement("div");

    productCardElement.className = "product-card";
    productCardElement.innerHTML = `

   <div class="img-cont">
    <img
        src="${element.imgUrl}"
        alt="${element.productName}"
        />
 </div>
 <a href="details.html?id=${element.id}" class="details">View Details</a>

    <div class="title">
      <span>${element.productName}</span>
      <i class="${
        favProducts.find((item) => item.id === element.id)
          ? "fa-solid fa-heart"
          : "fa-regular fa-heart"
      }" onclick="addToFavs(${element.id},this)"></i>
    </div>
    <span>$ ${element.price}</span>
    <div class="delete-icon" onclick="deleteProduct(${
      element.id
    },this)"><i class="fa-solid fa-trash"></i></div>

    `;

    productCardLists.append(productCardElement);
  });
}

async function deleteProduct(id, btn) {
  //   console.log(id);
  try {
    if (window.confirm("r u sure to delete product??")) {
      await axios.delete(`${BASE_URL}/products/${id}`);
      btn.closest(".product-card").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

function addToFavs(id, icon) {
  //   console.log(id);

  if (icon.className === "fa-solid fa-heart") {
    icon.className = "fa-regular fa-heart";
  } else {
    icon.className = "fa-solid fa-heart";
  }
  let favs = getFavsFromLocaleStorage();

  let product = products.find((item) => item.id === id);
  let index = favs.findIndex((item) => item.id === id);

  if (index === -1) {
    favs.push(product);
  } else {
    favs = favs.filter((item) => item.id !== id);
  }

  setProductToLocaleStorage(favs);
}
