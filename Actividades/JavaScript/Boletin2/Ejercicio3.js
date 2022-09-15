const cantidad = 14
let numeros = [];

let numero = parseInt(prompt("Numero: "));
numeros.push(numero);
let numeroMenor = numero;

for (let i = 0; i<cantidad;i++){
    numero = parseInt(prompt("Numero: "));
    numeros.push(numero);
    if (numero<=numeroMenor){
        numeroMenor = numero;
    }
}
console.log(numeros)
for (let n of numeros){
    if (numeroMenor == numeros[n]){
        console.log(`El numero menor está en la posicion ${n}`)
    }
}