//frutas

let frutas = ["manzana", "banana", "naranja", "kiwi", "uva"];
console.log(frutas[0]); // "manzana"
console.log(frutas.length); // 5
frutas.push("pera");
console.log(frutas); // ["manzana", "banana", "naranja", "kiwi", "uva", "pera"]
frutas.pop();
console.log(frutas); // ["manzana", "banana", "naranja", "kiwi", "uva"]
frutas.unshift("fresa");
console.log(frutas); // ["fresa", "manzana", "banana", "naranja", "kiwi", "uva"]
frutas.shift(); // ["manzana", "banana", "naranja", "kiwi", "uva"]

for (frutas in frutas) {
    console.log(frutas); // Imprime los índices de las frutas
}

frutas.forEach(fruta => {
    console.log(fruta); // Imprime cada fruta
});

let numeros =[]

numeros.push(1);
numeros.push(2);
numeros.unshift(0);
console.log(numeros); // [0, 1, 2]


for (let i = 0; i < numeros.length; i++) {
    console.log(`numero ${numeros[i]} en la posicion ${i}`); // Imprime cada número
}

Array.forEach((element,i) => {
    console.log(`numero ${numeros[i]} en la posicion ${i}`)

})

let valores = [1, 2, 3, 4, 5]
let cuadrados = valores.map(x=> x * x);
console.log(cuadrados); // [1, 4, 9, 16, 25

valores.forEach((element,i) => {
    suma += element;
})

console.log(`la suma de los numeros es ${suma}`); // 15

