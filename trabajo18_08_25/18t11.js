function capitalDePais(pais) {

    const mapa = new Map([
    ["egipto", "El Cairo"],
    ["noruega", "Oslo"],
    ["brasil", "Brasilia"],
    ["india", "Nueva Delhi"],
    ["españa", "Madrid"],
    ["alemania", "Berlín"],
    ["italia", "Roma"],
    ["corea del sur", "Seúl"],
    ["kenia", "Nairobi"],
    ["tailandia", "Bangkok"]
    ]);

    const clave = pais.toLowerCase();

    if (mapa.has(clave)) {
    return `la capital de ${pais} es ${mapa.get(clave)}.`;
    } else {
    return `no tengo registrada la capital de "${pais}".`;
    }
}