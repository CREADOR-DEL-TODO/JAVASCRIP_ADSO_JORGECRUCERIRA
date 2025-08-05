const prompt = require('prompt-sync')();

let precio = prompt("CUAL ES EL VALOR DEL PRODUCTO?: ");

let iva = prompt("INGRESE EL IVA DEL PRODUCTO: ");

let total = Number(precio) + (Number(precio) * Number(iva) / 100);
console.log("TOTAL A PAGAR: " + total);
