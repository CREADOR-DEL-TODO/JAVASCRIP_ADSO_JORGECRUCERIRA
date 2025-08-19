const prompt = require("prompt-sync")();

function contarPalabras(texto) {
    let limpio = texto.trim();

    if (limpio === "") {
    return 0;
    }

    let partes = limpio.split(/\s+/);
    return partes.length;
}

let entrada = prompt("ongresa una frase o texto para contar sus palabras: ");
let resultado = contarPalabras(entrada);

console.log("cantidad de palabras:", resultado);