function suma(a, b) {
    return a + b;
}

let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

let resultado = suma(numero1, numero2);

console.log("La suma de " + numero1 + " y " + numero2 + " es: " + resultado);
