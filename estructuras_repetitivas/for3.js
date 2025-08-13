const prompt = require('prompt-sync')();
function menu() {
    let opcion = 0
    do {
        console.clear();
        console.log("Menú de opciones:");
        console.log("1. area del circuo ");
        console.log("2. adivinar numro entre 1 y 10");
        console.log("3. salir");
        console.log("");
        opcion = parseInt(prompt("Seleccione una opción: "));
        switch (opcion) {
            case 1:
                console.log("Opción 1");
                // Aquí puedes agregar el código para la Opción 1
                break;
            case 2:
                console.log("Opción 2");
                // Aquí puedes agregar el código para la Opción 2
                break;
            case 3:
                console.log("voy a salir ");
                // Aquí puedes agregar el código para la Opción 3
                break;
        }
        prompt("Presiona Enter para continuar...");
    }while(opcion !== 3);
}

menu();