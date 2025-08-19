const prompt = require("prompt-sync")();

function invertirArreglo(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
    }

    return invertido;
}

let entrada = prompt("ya sabes, ingresa los elementos separados por una coma (ej: 1,2,3,4): ");
let arreglo = entrada.split(",").map(e => e.trim());

let resultado = invertirArreglo(arreglo);
console.log("arreglo invertido:", resultado);