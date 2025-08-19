const prompt = require("prompt-sync")();

function contarPares(numeros) {
    let contador = 0;

    for (let num of numeros) {
        if (num % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

let entrada = prompt("ingresa numeros separados por coma (ej: 10,15,22,33): ");
let arreglo = entrada.split(",").map(num => parseInt(num.trim()));

let resultado = contarPares(arreglo);
console.log("cantidad de numeros pares:", resultado);