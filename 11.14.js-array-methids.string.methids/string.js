let sampleString = `Lorem ipsum dolor`;

//length property
console.log(sampleString.length);

//charAt

console.log(sampleString.charAt(4));

//charCodeAt
console.log(sampleString.charCodeAt(4));

//uppercase/lovercase

console.log(sampleString.toLocaleUpperCase());
console.log(sampleString.toLocaleLowerCase());

//indexOf

console.log(sampleString.indexOf("o")); //1
console.log(sampleString.indexOf("z")); //-1
console.log(sampleString.indexOf("ipsum")); //6
console.log(sampleString.indexOf("o", 5)); //13

//lastIndexOf

console.log(sampleString.lastIndexOf("o")); //15

//startWith

console.log(sampleString.startsWith("L")); //true
console.log(sampleString.startsWith("l")); //false
console.log(sampleString.startsWith("a")); //false
console.log(sampleString.startsWith("Lorem")); //true
//endsWidth

console.log(sampleString.endsWith("L")); //false
console.log(sampleString.endsWith("dolor")); //true
console.log(sampleString.endsWith("r")); //true

//trim
console.log("  hello world     ".trim());
// console.log("  hello world     ".trimStart());
// console.log("  hello world     ".trimEnd());

//substring

console.log(sampleString.substring(2, 6));
console.log(sampleString.substring(6));

//slice

console.log(sampleString.slice(2, 6));
console.log(sampleString.slice(6));
console.log(sampleString.slice(-3));
console.log(sampleString.slice(-3, -1));

//padStart vs padEnd

console.log(sampleString.padStart(25, "#"));
console.log(sampleString.padEnd(25, "#"));

console.log("1111222233334444".slice(-4).padStart(16, "#"));

// indludes

console.log(sampleString.includes("salam")); //false
console.log(sampleString.includes("a")); //false
console.log(sampleString.toLocaleLowerCase().includes("lorem")); //true

//split

console.log("salam".split());
console.log("salam".split(""));
console.log("sa,la,m".split(","));

//replace

console.log(sampleString.replace("Lorem", "Hello"));
console.log(sampleString.replace("o", "z"));
console.log(sampleString.replaceAll("o", "z"));

//regex - regular expression

let mix = "123Salam 45Hello";

console.log(mix.replace(/[1-9]/g, "")); //salam hello
console.log(mix.replace(/[a-z]/g, "")); //123S 45H
console.log(mix.replace(/[a-z]/gi, "")); //123 45

//concat

// console.log("Hello".concat("World"));

let firstName = "Kanan";
let lastName = "Amirov";

// let fullName = firstName.concat(" ", lastName);

// let fullName = `${firstName} ${lastName}`;
let fullName = firstName + " " + lastName;

console.log(fullName);

//match

console.log("salam Hello 123".match(/[1-9]/g));
console.log("salam Hello 123".match(/[a-z]/g));
console.log("salam Hello 123".match(/[a-z]/gi));
