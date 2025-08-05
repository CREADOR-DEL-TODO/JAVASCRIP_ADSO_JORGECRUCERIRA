const prompt = require('prompt-sync')();

let n1 = prompt("DAME EL PRIMER NUMERO ENTERO: ");
let n2 = prompt("DAME EL SEGUNDO NUMERO ENTERO: ");
let n3 = prompt("DAME EL ULTIMO NUMERO ENTERO: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

let media = (n1 + n2 + n3) / 3;

console.log("LA MEDIA DE LA SUMA DE LOS NUMEROS ES: " + media);
