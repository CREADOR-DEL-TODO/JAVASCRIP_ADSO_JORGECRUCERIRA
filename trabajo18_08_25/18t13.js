const prompt = require("prompt-sync")();

function crearAlumno() {
    let nombre = prompt("ingresa el nombre del alumno: ");
    let notas = [];

    console.log("ingresa 5 notas (de 1 a 5):");
    for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Nota #${i + 1}: `));
    while (isNaN(nota) || nota < 1 || nota > 5) {
        nota = parseFloat(prompt("Nota no valida, ungresa un valor entre 1 y 5: "));
    }
    notas.push(nota);
    }

    let alumno = {
    nombre: nombre,
    notas: notas,
    promedio: function () {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
        }
        return (suma / this.notas.length).toFixed(2);
    }
    };

    return alumno;
}

let estudiante = crearAlumno();
console.log("\n estudiante:", estudiante.nombre);
console.log(" notas:", estudiante.notas);
console.log(" promedio:", estudiante.promedio());