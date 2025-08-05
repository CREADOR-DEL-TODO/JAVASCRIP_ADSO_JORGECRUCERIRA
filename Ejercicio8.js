const prompt = require('prompt-sync')();

let personas = prompt("¿CUANTOS GORDOS VAN A COMER PASTEL DE PAPA?: ");
personas = Number(personas);

let papaGramos = personas * 200;
let kilosPapa = papaGramos / 1000;

let huevos = kilosPapa * 5;
let cebolla = kilosPapa * 300;

console.log("NECESITAMOS:");
console.log(papaGramos + " GRAMOS DE PAPA");
console.log(huevos + " HUEVOS");
console.log(cebolla + " GRAMOS DE CEBOLLA");
