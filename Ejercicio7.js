const prompt = require('prompt-sync')();

let numero = prompt("DAME UN NUMERO DE 2 DIGITOS: ");
numero = Number(numero);

let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

console.log("UNIDADES: " + unidades);
console.log("DECENAS: " + decenas);

