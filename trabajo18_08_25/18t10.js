const prompt = require("prompt-sync")();

function reemplazarElemento(arr, valorViejo, valorNuevo) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valorViejo) {
        arr[i] = valorNuevo;
    }
    }
    return arr;
}

let entrada = prompt(" elementos separados por coma otra vez (ej: rojo,azul,verde): ");
let arreglo = entrada.split(",").map(e => e.trim());

let valorViejo = prompt("que valor que deseas reemplazar: ").trim();
let valorNuevo = prompt("nuevo valor?: ").trim();

let resultado = reemplazarElemento(arreglo, valorViejo, valorNuevo);
console.log("arreglo actualizado:", resultado);