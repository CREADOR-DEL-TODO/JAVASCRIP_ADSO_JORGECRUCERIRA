const prompt = require('prompt-sync')();

let precio = prompt("inregese un numero:");

if((numero>=10 && numero<=99)
    || (numero>=-99 && numero<=-10)) {
    console.log(`El numero ${numero} es de dos digitos`)
}else {
    console.log(`El numero ${numero} no es de dos digitos`)
}

