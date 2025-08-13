const promt = require('prompt-sync')();
const numero1 = parseInt(promt('Ingrese un número inferior: '));
const numero2 = parseInt(promt('Ingrese un número superior: '));

let mayor=0;
let menor=0;

if (numero1 >= numero2) {
    let mayor = numero1;
    let menor = numero2;
}else {
    let mayor = numero2;
    let menor = numero1;
}

for (let valor=menor ; valor<= mayor; valor++){

    if (valor%3===0){
        console.log(valor);
    }
};