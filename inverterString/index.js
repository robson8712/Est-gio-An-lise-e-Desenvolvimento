let string = "Hello, world!";

let invertedArray = [];

for (let i = string.length - 1; i >= 0; i--) {
  invertedArray.push(string[i]);
}

let invertedString = invertedArray.join("");

console.log(invertedString); 
