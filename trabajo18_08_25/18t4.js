const prompt = require("prompt-sync")();

function sumaYPromedio(numeros) {
    if (numeros.length === 0) {
    return "El arreglo está vacío. No se puede calcular.";
    }

    let suma = 0;
    for (let num of numeros) {
    suma += num;
    }

    let promedio = suma / numeros.length;
    return `Suma: ${suma}  Promedio: ${promedio}`;
}

let entrada = prompt("ingresa los numeros separados con una coma como en el ejercicio anterior: ");
let arreglo = entrada.split(",").map(num => parseFloat(num.trim()));

console.log(sumaYPromedio(arreglo));