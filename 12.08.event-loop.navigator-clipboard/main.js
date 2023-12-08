//event loop

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

let promise = new Promise((resolve, reject) => {
  resolve(3);
});

promise.then((response) => {
  console.log(response);
});

console.log(4);

//navigator clipboard

const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");
const text = document.querySelector(".text");
const result = document.querySelector(".result");

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(text.innerText).then(() => {
    console.log("copied");
  });
});

pasteBtn.addEventListener("click", function () {
  //   console.log(navigator.clipboard.readText());
  navigator.clipboard
    .readText()
    .then((response) => {
      // console.log(response);
      result.innerText += ` ${response}`;
    })
    .catch((err) => {
      console.log(err);
    });
});

// console.log("b" + "a" + +"a" + "a"); //baNaNa
