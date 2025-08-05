const prompt = require('prompt-sync')();

let horas = prompt("HOLA PELAO, SOY UN CONVERTIDOR A SEGUNDOS ASI QUE DIME CUANTAS HORAS CONSUMISTE: ");
let minutos = prompt("Y AHORA CUANTOS MINUTOS ADICIONALES CONSUMISTE?: ");

horas = Number(horas);
minutos = Number(minutos);

let totalSegundos = (horas * 60 * 60) + (minutos * 60);

console.log("TU TIEMPO GASTADO EN SEGUNDOS ES: " + totalSegundos);
