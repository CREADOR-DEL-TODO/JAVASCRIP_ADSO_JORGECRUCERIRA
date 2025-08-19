const prompt = require("prompt-sync")();

function elecciones() {
    let votos = {
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    blanco: 0
    };

    const totalVotantes = 50;
    let votaron = 0;
    const claveCierre = "1234";
    let cerrado = false;

    console.log(" MENU ELECCIONES 2025");
    console.log("1. Candidato Uno");
    console.log("2. Candidato Dos");
    console.log("3. Candidato Tres");
    console.log("4. Voto en Blanco");
    console.log("5. Cerrar elecciones (solo presidente)");

    while (votaron < totalVotantes && !cerrado) {
    let opcion = prompt(`\nVotante #${votaron + 1}, ingrese su opción (1-5): `);

    switch (opcion) {
        case "1":
        votos.candidato1++;
        votaron++;
        break;
        case "2":
        votos.candidato2++;
        votaron++;
        break;
        case "3":
        votos.candidato3++;
        votaron++;
        break;
        case "4":
        votos.blanco++;
        votaron++;
        break;
        case "5":
        let clave = prompt(" ingrese la clave de cierre: ");
        if (clave === claveCierre) {
            cerrado = true;
            console.log(" elecciones cerradas por el presidente de la mesa.");
        } else {
            console.log(" clave incorrecta continuan las elecciones.");
        }
        break;
        default:
        console.log(" opcion invalida. intente de nuevo.");
    }
    }

    console.log("\n ELECCIONES FINALIZADAS");
    console.log(" numero de personas que votaron:", votaron);
    console.log(" votos candidato 1:", votos.candidato1);
    console.log(" votos candidato 2:", votos.candidato2);
    console.log(" votos candidato 3:", votos.candidato3);
    console.log(" votos en blanco:", votos.blanco);
}

elecciones();