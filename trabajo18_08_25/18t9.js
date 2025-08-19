const prompt = require("prompt-sync")();

function indiceDeValor(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
        return i;
    }
    }
    return -1;
}

let entrada = prompt("ingresa elementos separados por coma (ej: a,b,c,d): ");
let arreglo = entrada.split(",").map(e => e.trim());

let valorBuscado = prompt("ingresa el valor que  buscas: ").trim();

let resultado = indiceDeValor(arreglo, valorBuscado);

if (resultado !== -1) {
    console.log(`el valor "${valorBuscado}" se encuentra en el indice ${resultado}.`);
} else {
    console.log(`el valor "${valorBuscado}" no esta en el arreglo.`);
}