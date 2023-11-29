let tBody = document.querySelector("tbody");
let total = document.querySelector(".total");
let basketCount = document.querySelector(".basket-count");

let basket = getBasketFromLocalStorage() ?? [];
function drawBasketTable(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td><img src="${element.product.thumbnail}"/></td>
        <td>${element.product.title}</td>
        <td>${element.product.price} AZN</td>
        <td>${element.product.stock}</td>
        <td class="sub-total">${element.product.price * element.count} AZN</td>
        <td><button onclick=incrementCount(this,"${
          element.product._id
        }")>+</button><span class="product-count">${
      element.count
    }</span><button onclick=decrementCount(this,"${
      element.product._id
    }")>-</button></td>
        <td><button class="btn btn-danger" onclick=deleteProduct(this,"${
          element.product._id
        }")>Delete</button></td>
   
        `;

    tBody.append(tr);
  });
}

drawBasketTable(basket);

function setBasketToLocalStorage(arr) {
  localStorage.setItem("basket", JSON.stringify(arr));
}
function getBasketFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket"));
}

function deleteProduct(btn, id) {
  basket = basket.filter((item) => item.product._id !== id);
  setBasketToLocalStorage(basket);
  //   btn.parentElement.parentElement.remove();
  btn.closest("tr").remove();
  getTotalPrice();
  getBasketCount();
}

function getTotalPrice() {
  total.textContent = `${basket.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  )} AZN`;
}

function getBasketCount() {
  //   basketCount.textContent = basket.length;
  basketCount.textContent = basket.reduce((sum, item) => sum + item.count, 0);
}

function incrementCount(btn, id) {
  let product = basket.find((item) => item.product._id === id);
  product.count = product.count + 1;

  if (product.count <= product.product.stock) {
    setBasketToLocalStorage(basket);
    //   console.log(btn.closest("td"));
    //   console.log(btn.closest("td").children[1]);
    btn.closest("td").querySelector(".product-count").textContent =
      product.count;

    btn.closest("tr").querySelector(".sub-total").textContent = `${
      product.product.price * product.count
    } AZN`;
    getTotalPrice();
    getBasketCount();
  } else {
    alert("stock'da bu qeder mehsul yoxdur!");
  }
}
function decrementCount(btn, id) {
  let product = basket.find((item) => item.product._id === id);
  product.count = product.count - 1;

  btn.closest("td").querySelector(".product-count").textContent = product.count;

  btn.closest("tr").querySelector(".sub-total").textContent = `${
    product.product.price * product.count
  } AZN`;

  if (product.count === 0) {
    btn.closest("tr").remove();
    basket = basket.filter((item) => item.product._id !== id);
  }

  setBasketToLocalStorage(basket);
  getTotalPrice();
  getBasketCount();
}
getBasketCount();
getTotalPrice();
