const prompt = require('prompt-sync')();

let numero = prompt("DIME CUALQUIER NUMERO Y TE DIRE SI ES PAR O SI NO LO ES: ");
numero = Number(numero);

let esPar = numero % 2 === 0;

console.log(esPar);
