const prompt = require('prompt-sync')();

let a = prompt("ESCRIBE EL VALOR DE (a): ");
let b = prompt("ESCRIBE EL VALOR DE (b): ");

let temp = a;
a = b;
b = temp;

console.log("EL VALOR DE a ES: " + a);
console.log("Y EL VALOR DE b ES: " + b);
