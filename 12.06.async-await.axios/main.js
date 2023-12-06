// async await

const BASE_URL = `https://northwind.vercel.app/api`;

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//   console.log(1);
//   console.log(2);

// function getData() {
//   fetch("https://northwind.vercel.app/api/suppliers")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

async function getAllData() {
  try {
    const response = await fetch(`${BASE_URL}/customers`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block");
  }
}

async function getDataById(id) {
  try {
    const response = await fetch(`${BASE_URL}/customers/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
async function deleteDataById(id) {
  try {
    await fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

getAllData();
// getDataById("BERGS");
// deleteDataById("AROUT");

async function addNewData(obj) {
  try {
    await fetch(`${BASE_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
}
// addNewData({ class: "GWP202" });

async function updateDataById(id, obj) {
  try {
    await fetch(`${BASE_URL}/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateDataByIdwithPatch(id, obj) {
  try {
    await fetch(`${BASE_URL}/customers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
}

// updateDataById("BERGS", { city: "Ganja" });
// updateDataByIdwithPatch("BLONP", { companyName: "Code", city: "Ganja" });
// updateDataByIdwithPatch("BONAP", { companyName: "Lorem Ipsum" });

// try catch blocks
