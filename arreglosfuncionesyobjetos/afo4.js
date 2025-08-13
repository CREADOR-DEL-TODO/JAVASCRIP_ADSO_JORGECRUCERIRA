let cuenta = {
    titular: "Ana",
    saldo: 1500,
    mostrarSa1do: function() {
        return `EI saldo de ${this.titular} es $${this.saldoy}`
    }
};
    console.log(cuenta.mostrarSa1do( ) )
    cuenta.saldo-= 500;
    console.log(cuenta.mostrarSa1do( ) )