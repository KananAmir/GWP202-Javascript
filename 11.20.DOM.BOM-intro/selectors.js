// console.log(window.document);
console.log(window.document.documentElement);
console.log(window.document.body);
console.log(document.head);

// let logo = document.querySelector(".logo"); //element
// let sample = document.querySelector("#sample"); //element
// let allTexts = document.querySelectorAll(".container p");
let allTexts = document.querySelectorAll(".text"); // node list

let sampleText = document.getElementById("sample"); // element
let allParags = document.getElementsByClassName("text"); // html collection

let allSpans = document.getElementsByTagName("span"); //html collection
let allInputsTest = document.getElementsByName("test"); //nodelist
// console.log(logo);
// console.log(allTexts);
// console.log(sampleText);

// console.log(allTexts);
// console.log(allParags);

// console.log(allSpans);
console.log(allInputsTest);

allTexts.forEach((element, i) => {
  console.log(i, element);
});

// innerHtml, innerText, textContent

// console.log(sampleText.innerHTML);
// console.log(sampleText.innerText);
// console.log(sampleText.textContent);

//create element

let h3Element = document.createElement("h3");
let pElement = document.createElement("p");

h3Element.innerText = "Lorem, ipsum";

h3Element.style.fontSize = "3rem";
pElement.innerText = "gwp202";
let container = document.querySelector(".container");
//append vs appendChild

// setTimeout(() => {
//   container.append(h3Element);
// }, 5000);

container.append(h3Element, pElement);
// container.append("salam");
// container.appendChild(h3Element);
// container.appendChild(pElement);
//prepend

// container.prepend(h3Element);

//before vs after

let secondLogo = document.querySelectorAll(".logo")[1];

console.log(document.querySelectorAll(".logo")[0]);
console.log(document.querySelectorAll(".logo")[1]);
// secondLogo.before(pElement);
secondLogo.after(pElement);

let h1Elem = document.querySelectorAll(".logo")[0];

setTimeout(() => {
  h1Elem.style.color = "red";
  h1Elem.style.backgroundColor = "cyan";
  //   h1Elem.style.display = "none";
}, 3000);
