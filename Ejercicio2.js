const prompt = require('prompt-sync')();

let lado = prompt("ESCRIBE EL TAMAÑO DE LA CARA DEL CUADRADO EN (CM): ");
lado = Number(lado);

let area = lado * lado;
let perimetro = lado * 4;

console.log("EL AREA DEL CUADRADO EN CM ES: " + area);
console.log("EL PERIMETRO DEL CUADRADO EN CM ES: " + perimetro);
