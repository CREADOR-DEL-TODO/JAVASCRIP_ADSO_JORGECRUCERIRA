class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    total() {
        return this.productos.reduce((sum, p) => sum + p.precio, 0);
    }

    listarProductos() {
        this.productos.forEach(p => {
            console.log(`Product: ${p.nombre}, Price: ${p.precio}`);
        });
    }
}


const p1 = new Producto("jamon", 5500);
const p2 = new Producto("limone", 9500);

const pedido = new Pedido();
pedido.agregarProducto(p1);
pedido.agregarProducto(p2);

pedido.listarProductos();
console.log("total del pedido:", pedido.total());
