// api
// fetch api
// http response codes

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// get, delete, post, put, patch

const BASE_URL = `https://northwind.vercel.app/api`;

//get all data
function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

getAllData("suppliers");
// getAllData("products");
// getAllData("orders");

// console.log(1);
// console.log(2);
// console.log(3);

//get data by id

function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

// getDataById("suppliers", 6);
// getDataById("suppliers", 8);

//delete data by id

function deleteDataByID(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// deleteDataByID("suppliers", 4);
// deleteDataByID("suppliers", 6);

//add new data

function addNewData(endpoint, obj) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

let obj = {
  companyName: "Code Academy",
  contactName: "GWP",
  contactTitle: "GDU",
  address: {
    street: "9-8 Sekimai Musashino-shi",
    city: "Ganja",
    region: "NULL",
    postalCode: 100,
    country: "Azerbaijan",
    phone: "(03) 3555-5011",
  },
};

// addNewData("suppliers", obj);

// addNewData("suppliers", {
//   companyName: "Code Academy",
//   contactName: "GWP",
//   contactTitle: "GDU",
//   address: {
//     street: "9-8 Sekimai Musashino-shi",
//     city: "Ganja",
//     region: "NULL",
//     postalCode: 100,
//     country: "Azerbaijan",
//     phone: "(03) 3555-5011",
//   },
// });

//update data by id

function updateDataById(endpoint, id, obj) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// updateDataById("suppliers", 5, { hello: "hello" });

let a = {
  companyName: "lorem ipsum",
  contactName: "test",
  contactTitle: "Marketing Manager",
  address: {
    street: "74 Rose St. Moonie Ponds",
    city: "London",
    region: "Victoria",
    postalCode: 3058,
    country: "England",
    phone: "(03) 444-2343",
  },
};

updateDataById("suppliers", 7, a);

//update data by id with specific fields

function updateDataByIdWithSpecificFields(endpoint, id, obj) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// updateDataByIdWithSpecificFields("suppliers", 11, { companyName: "Code GWP" });
updateDataByIdWithSpecificFields("suppliers", 11, {
  companyName: "Code GWP",
  address: {
    city: "Ganja",
  },
});
