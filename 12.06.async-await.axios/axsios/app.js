const BASE_URL = `https://northwind.vercel.app/api`;

// fetch(`${BASE_URL}/suppliers`, {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// axios.get(`${BASE_URL}/suppliers`).then((res) => console.log(res.data));
// axios(`${BASE_URL}/suppliers`).then((res) => console.log(res.data));

// axios.post(`${BASE_URL}/customers`, { test: "TEST" });

async function getAllData() {
  const response = await axios(`${BASE_URL}/suppliers`);
  console.log(response.data);
}

// getAllData();

async function getDataById(id) {
  const response = await axios(`${BASE_URL}/suppliers/${id}`);
  console.log(response.data);
}

// getDataById(5);
// getDataById(15);

async function deleteDataById(id) {
  await axios.delete(`${BASE_URL}/suppliers/${id}`);
}

// deleteDataById(5);

async function addNewData(obj) {
  await axios.post(`${BASE_URL}/suppliers`, obj);
}

// addNewData({ lorem: "Ipsum" });

async function updateDataById(id, obj) {
  await axios.put(`${BASE_URL}/suppliers/${id}`, obj);
}
async function updateDataByIdWithPatch(id, obj) {
  await axios.patch(`${BASE_URL}/suppliers/${id}`, obj);
}

// updateDataById(6, { userName: "Gulnur" });
// updateDataByIdWithPatch(6, { companyName: "Gulnur MMC" });

// updateDataById(8, { class: "gwp" });

// AXIOS INSTANCE

const axiosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

async function getProducts() {
  try {
    const response = await axiosInstance("products");
    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
}
async function getProductsById(id) {
  try {
    const response = await axiosInstance(`products/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// getProducts();
// getProductsById(5);

async function deleteProductById(id) {
  await axiosInstance.delete(`products/${id}`);
}
async function addProduct(obj) {
  await axiosInstance.post(`products`, obj);
}
async function updateProduct(id, obj) {
  await axiosInstance.patch(`products/${id}`, obj);
}

// deleteProductById(4);
// addProduct({ lorem: "ipsum" });
updateProduct(5, { name: "Gwp 202" });
