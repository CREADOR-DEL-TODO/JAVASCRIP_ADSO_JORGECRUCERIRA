class Autor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Editorial {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }

    info() {
        console.log(`${this.titulo} - ${this.autor.nombre}, Editorial: ${this.editorial.nombre}`);
    }
}

const autor1 = new Autor("GABITO");
const editorial1 = new Editorial("sudamericana");

const libro1 = new Libro("100 años de soledad", autor1, editorial1);
libro1.info();
