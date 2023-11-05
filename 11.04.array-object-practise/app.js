//array of objets

const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

//price more than 50
// for (let i = 0; i < products.length; i++) {
//   //   console.log(products[i]);
//   if (products[i].price > 50) {
//     console.log(products[i]);
//   }
// }

//price more than 50 & category equals to Electronics

for (let i = 0; i < products.length; i++) {
  //   console.log(products[i]);
  if (
    products[i].price > 50 &&
    products[i].category.toLocaleLowerCase() === "electronics"
  ) {
    console.log(products[i]);
  }
}

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "CUBA",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "HAITI",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "INDIA",
  "Indonesia",
];
//Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
let maxLengthCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > maxLengthCountry.length) {
    maxLengthCountry = countries[i];
  }
}

console.log(maxLengthCountry);

"Abc" === "Abc".toLocaleUpperCase(); // false
"ABC" === "Abc".toLocaleUpperCase(); //true
//Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

for (let i = 0; i < countries.length; i++) {
  if (countries[i] === countries[i].toLocaleUpperCase())
    console.log(countries[i]);
}
