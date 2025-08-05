const prompt = require('prompt-sync')();

let km = prompt("¿KILOMETROS RECORRIDOS?: ");
let litros = prompt("¿CUANTOS LITROS DE GAS CONSUMISTE?: ");

km = Number(km);
litros = Number(litros);

let consumo = litros / km;

console.log("TU AUTO CONSUMIÓ " + consumo + " L/KM.");
