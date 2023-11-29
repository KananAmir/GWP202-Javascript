const products = [
  {
    _id: "6403c49deb0d73a0453b6c6e",
    title: "iPhone X 128GB",
    brand: "Apple",
    description:
      "The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor.",
    price: 960,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",

    stock: 55,
    tags: ["mobile phone", "smartphone", "ios"],
    comments: [],
    rating: 5,
    __v: 0,
  },
  {
    _id: "6403c67feb0d73a0453b6c72",
    title: "iPhone 11 128GB",
    brand: "Apple",
    description:
      "The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc.",
    price: 999,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",

    stock: 42,
    tags: ["mobile phone", "smartphone", "ios"],
    comments: [],
    rating: 4,
    __v: 0,
  },
  {
    _id: "6403c730eb0d73a0453b6c74",
    title: "iPhone 14 Pro 256GB",
    brand: "Apple",
    description:
      "The iPhone 14 Pro is a smartphone designed, developed, and marketed by Apple Inc.",
    price: 1499,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",

    stock: 50,
    tags: ["mobile phone", "smartphone", "ios"],
    comments: [],
    rating: 5,
    __v: 0,
  },
  {
    _id: "64077f9114760a7018986911",
    title: "Samsung Galaxy S23 Ultra 256GB",
    brand: "Samsung",
    description:
      "Here are the lowest prices we could find for the Samsung Galaxy S23 Ultra at our partner stores.",
    price: 1199,

    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",

    stock: 25,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
    __v: 0,
  },
  {
    _id: "6407832d197e7ef81e336693",
    title: "Samsung Galaxy Z Fold4 1TB",
    brand: "Samsung",
    description:
      "This here are the lowest prices we could find for the Samsung Galaxy Z Fold4 at our partner stores.",
    price: 1245,

    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4-5g.jpg",

    stock: 30,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
    __v: 0,
  },
  {
    _id: "640784ae197e7ef81e336695",
    title: "Samsung Galaxy A73 5G 64GB",
    brand: "Samsung",
    description:
      "This here are the lowest prices we could find for the Samsung Galaxy A73 5G at our partner stores.",
    price: 397,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a73-5g.jpg",

    stock: 20,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
    __v: 0,
  },
  {
    _id: "6407858d197e7ef81e336697",
    title: "Huawei nova 10 Youth 128GB",
    brand: "Huawei",
    description:
      "This here are the lowest prices we could find for the Huawei nova 10 Youthat our partner stores.",
    price: 450,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova10-yough.jpg",

    stock: 40,
    tags: ["mobile phone", "smartphone", "android"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078662197e7ef81e336699",
    title: "Huawei Mate 50 RS Porsche Design 256GB",
    brand: "Huawei",
    description:
      "This here are the lowest prices we could find for the Huawei Mate 50 RS Porsche Design Youthat our partner stores.",
    price: 850,

    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-50-rs-porsche-design.jpg",

    stock: 50,
    tags: ["mobile phone", "smartphone", "android", "huawei"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078745197e7ef81e33669b",
    title: "Asus ROG Phone 6D 512GB",
    brand: "Asus",
    description:
      "This here are the lowest prices we could find for the Asus ROG Phone 6D RS Porsche Design Youthat our partner stores.",
    price: 690,

    thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-6d.jpg",

    stock: 45,
    tags: ["mobile phone", "smartphone", "android", "asus"],
    comments: [],
    __v: 0,
  },
  {
    _id: "640787b3197e7ef81e33669d",
    title: "Asus Zenfone 7 128GB",
    brand: "Asus",
    description:
      "This here are the lowest prices we could find for the Asus Zenfone 7 RS Porsche Design Youthat our partner stores.",
    price: 510,

    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone7-pro-zs670ks-zs671ks.jpg",

    stock: 60,
    tags: ["mobile phone", "smartphone", "android", "asus"],
    comments: [],
    __v: 0,
  },
  {
    _id: "640789f7197e7ef81e3366a1",
    title: "Asus TUF Gaming A17 512GB SSD",
    brand: "Asus",
    description:
      "Asus TUF Gaming A17 FA706IHRB-HX041W Gaming Laptop (AMD Ryzen 5 4600H/ 8GB/ 512GB SSD/ Win11 Home/ 4GB/",
    price: 1660,

    thumbnail:
      "https://cdn1.smartprix.com/rx-i4TCnbvn5-w420-h420/asus-tuf-gaming-a17.webp",

    stock: 60,
    tags: ["gaming", "laptop", "windows", "asus"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078ac6197e7ef81e3366a3",
    title: "Lenovo IdeaPad Slim 1 512GB SSD",
    brand: "Lenovo",
    description:
      "You can buy Lenovo IdeaPad Slim 1 82VG009MIN Laptop (AMD Ryzen 3 7320U/ 8GB/ 512GB SSD/ Win11 Home) online on Amazon lowest price. Lenovo IdeaPad Slim 1 82VG009MIN Laptop (AMD Ryzen 3 7320U/ 8GB/ 512GB SSD/ Win11 Home) was last updated on March 7, 2023",
    price: 1400,

    thumbnail:
      "https://cdn1.smartprix.com/rx-ial6kx7ni-w420-h420/lenovo-ideapad-slim.webp",

    stock: 20,
    tags: ["office", "laptop", "windows", "lenovo"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078b67197e7ef81e3366a5",
    title: "HP Pavilion 15 Gaming Laptop 512GB SSD",
    brand: "HP",
    description:
      "HP Pavilion 15-ec2004AX Gaming Laptop (AMD Ryzen 5 5600H/ 8GB/ 512GB SSD/ Win10 Home/ 4GB Graph)",
    price: 1500,

    thumbnail:
      "https://cdn1.smartprix.com/rx-ixw8plkUF-w420-h420/hp-pavilion-15-ec200.webp",

    stock: 14,
    tags: ["gaming", "laptop", "windows", "hp"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078be8197e7ef81e3366a7",
    title: "Acer Aspire 7A715-51G Gaming Laptop 512GB SSD",
    brand: "Acer",
    description:
      "Acer Aspire 7A715-51G Gaming Laptop (12th Gen Core i5/ 8GB/ 512GB SSD/ Win11/ 4GB Graph)",
    price: 1710,

    thumbnail:
      "https://cdn1.smartprix.com/rx-ie0dZGrf5-w420-h420/acer-aspire-7-a715-5.webp",

    stock: 22,
    tags: ["gaming", "laptop", "windows", "acer"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64078d1e197e7ef81e3366a9",
    title: "MSI Gaming Katana GF76 512GB SSD",
    brand: "MSI",
    description:
      "MSI Gaming Katana GF76 11SC-847IN Laptop (11th Gen Core i5/ 8GB/ 512GB SSD/ Win11 Home/ 4GB Graph) ",
    price: 1620,

    thumbnail:
      "https://cdn1.smartprix.com/rx-iIL0bISnc-w420-h420/msi-gaming-katana-gf.webp",

    stock: 22,
    tags: ["gaming", "laptop", "windows", "msi"],
    comments: [],
    __v: 0,
  },
  {
    comments: [],
    _id: "6407908f197e7ef81e3366ad",
    title: "Apple Watch Series 7 Aluminum",
    brand: "Apple",
    description:
      "ECG certified (region dependent SW application; HW available on all models)",
    price: 799,

    thumbnail:
      "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-7-aluminum.jpg",

    stock: 16,
    tags: ["digital", "watch", "apple"],
    __v: 0,
  },
  {
    _id: "6407912d197e7ef81e3366b1",
    title: "Apple Watch Edition 38mm",
    brand: "Apple",
    description:
      "ECG Certified (region dependent SW application; HW available on all models)",
    price: 800,

    thumbnail:
      "https://360view.hum3d.com/zoom/Apple/Apple_Watch_38mm_Rose_Gold_Case_with_Gray_Modern_Buckle_1000_0001.jpg",

    stock: 16,
    tags: ["digital", "watch", "apple"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64079206197e7ef81e3366b3",
    title: "Beats Studio3 Wireless",
    brand: "Beats",
    description:
      "Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time",
    price: 232,

    thumbnail: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_SX522_.jpg",

    stock: 18,
    tags: ["earphone", "headphone", "beats"],
    comments: [],
    __v: 0,
  },
  {
    _id: "64079287197e7ef81e3366b5",
    title: "Beats Studio Buds Wireless",
    brand: "Beats",
    description:
      "rue Wireless Noise Cancelling Earbuds - Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black",
    price: 119,

    thumbnail: "https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SX522_.jpg",

    stock: 26,
    tags: ["earphone", "headphone", "beats"],
    comments: [],
    __v: 0,
  },
  {
    _id: "6407934e197e7ef81e3366b7",
    title: "Apple AirPods Wireless Earbuds",
    brand: "Apple",
    description:
      "Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone",
    price: 119,

    thumbnail: "https://m.media-amazon.com/images/I/61ziCBwTtEL._AC_SX522_.jpg",

    stock: 30,
    tags: ["earphone", "headphone", "apple", "earbuds"],
    comments: [],
    __v: 0,
  },
];

let productsList = document.querySelector(".products");
let basketCount = document.querySelector(".basket-count");

let basket = getBasketFromLocalStorage() ?? [];

function drawProducts(data) {
  productsList.innerHTML = "";

  data.forEach((element) => {
    let divElem = document.createElement("div");
    divElem.className =
      "col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center";
    divElem.innerHTML = `
    <div class="card" style="width: 18rem">
    <img src="${element.thumbnail}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">
       ${element.description.slice(0, 100)}...
      </p>
      <p class="card-text fw-bold">
       Price: ${element.price}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <button href="#" class="btn btn-primary" onclick=addToBasket("${
          element._id
        }")>Add to Basket</button>
        <i class="fa-regular fa-heart text-danger"></i>
      </div>
    </div>
  </div>
    `;
    productsList.append(divElem);
  });
}

drawProducts(products);

function addToBasket(id) {
  let basketProduct = products.find((item) => item._id === id);

  let index = basket.findIndex((item) => item.product._id === id);

  if (index > -1) {
    basket[index].count = basket[index].count + 1;
  } else {
    basket.push({ count: 1, product: basketProduct });
  }

  console.log(index);
  setBasketToLocalStorage(basket);
  getBasketCount();
}

function setBasketToLocalStorage(arr) {
  localStorage.setItem("basket", JSON.stringify(arr));
}
function getBasketFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket"));
}

function getBasketCount() {
  //   basketCount.textContent = basket.length;
  basketCount.textContent = basket.reduce((sum, item) => sum + item.count, 0);
}

getBasketCount();
