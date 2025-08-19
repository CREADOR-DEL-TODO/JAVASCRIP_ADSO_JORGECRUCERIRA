const prompt = require("prompt-sync")();

function contarVocales(texto) {
    const vocales = "aeiou";
    let contador = 0;

    for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
        contador++;
    }
    }

    return contador;
}

let entrada = prompt("Ingresa un texto para contar las vocales: ");
let resultado = contarVocales(entrada);

console.log("Cantidad de vocales:", resultado);