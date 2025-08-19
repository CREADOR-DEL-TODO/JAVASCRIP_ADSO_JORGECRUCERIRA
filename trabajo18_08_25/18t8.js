const prompt = require("prompt-sync")();

function nombresMayusculas(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i].toUpperCase());
    }
    return resultado;
}

let entrada = prompt("ingresa nombres separados por coma (ej: juan,sofia,jefferson): ");
let arreglo = entrada.split(",").map(e => e.trim());

let resultado = nombresMayusculas(arreglo);
console.log("names en mayuscula:", resultado);