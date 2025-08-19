const prompt = require("prompt-sync")();

function eliminarDuplicados(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (resultado.indexOf(arr[i]) === -1) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

let entrada = prompt("otra vez, seprara las cosas con comas (ej: a,b,a,c): ");
let arreglo = entrada.split(",").map(e => e.trim());

let resultado = eliminarDuplicados(arreglo);
console.log("sin duplicados:", resultado);