// Ejercicio 1

/*
let nombre = prompt("Dime tu nombre");
let edad = prompt("Dime tu edad");

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${(parseInt(edad)+1)} años.`);
*/

// Ejercicio 2

/*
let opc = prompt("Escriba la opción que desee: \n1. Triangunlo \n2. Rectangulo \n3.Circulo");

switch (opc){
    case "1":{
        let base = prompt("Dame la base de la figura");
        let altura = prompt("Dame la altura de la figura");
        console.log(`El area del triangulo es de ${parseInt(base)*parseInt(altura)/2}`);
    }
    break;
    case "2":{
        let base = prompt("Dame la base de la figura");
        let altura = prompt("Dame la altura de la figura");
        console.log(`El area del triangulo es de ${parseInt(base)*parseInt(altura)}`);
    }
    break;
    case "3":{
        let radio = prompt("Dame el radio de la figura");
        console.log(`El area del circulo es de ${Math.PI * parseInt(radio)*2}`);
    }
    break;
    default:{
        console.log("Valor no valido");
    }
}
*/

// Ejercicio 3

/*
let numero = prompt("Dame un número");

for (let i = 1; i<=numero;i++){
    if (i%2==0){
        console.log(`${i} es par.`);
    }
    else {
        console.log(`${i} es impar.`);
    }
}
*/

// Ejercicio 4

/*
let num = parseInt(prompt("Dame un numero para comprobar si es primo"));
let esPrimo = true;

if (num==1 || num == 2 || num == 3){
    esPrimo = true;
}

for (let i=2; i<=num/2+1; i++) {
    if (num%i==0) {
        esPrimo = false;
    }
}
console.log(esPrimo);
*/

// Ejercicio 5

/*
let numero = 0;
do{
    numero = Number(prompt("Dame un numero mayor que 0"));
}while(numero <= 0);

let total = 1;

for (let i = numero; i>0;i--){
    total = total * i;
}
console.log(total);
*/

// Ejercicio 6

/*
let numero = 0;
let contador = 0;
let nMuestra = numero;
while (numero < 50){
    numero += parseInt(prompt("Dame un numero"));
    if (numero<50){
        nMuestra = numero;
    }
    contador++;
}
console.log(nMuestra);
console.log(contador);
*/

// Ejercicio 7

/*
let numeros = [1,4,5,6,12];
let pares = [];
let impares = [];
let numeroRandom = 0;
let resultado = 0;

for (numero of numeros){

    numeroRandom = Math.round(Math.random()*10);
    resultado = numero * numeroRandom;

    console.log(`${numero} x ${numeroRandom} = ${resultado}`)

    if (resultado % 2==0){
        pares.push(resultado);

    }
    else{
        impares.push(resultado);

    }
}

console.log(pares);
console.log(impares);
*/

// Ejercicio 8

/*
const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
let numero = 0;
do{
numero = parseInt(prompt("Dame un numero de 8 cifras"));
}while (numero < 9999999 || numero > 100000000);

let letraIntroducida = letras[numero % 23];

console.log(`Tu DNI es: ${numero}${letraIntroducida}`);
*/

// Ejercicio 9

/*
let palabra = prompt("Dime una palabra");

let vocales = ['a','e','i','o','u'];

let CoincidenciaDeconsonantes = 0;
let CoincidenciaDevocales = 0;

for (let i of palabra){
    if (vocales.includes(i)){
        CoincidenciaDevocales++;
    }
    else {
        CoincidenciaDeconsonantes++;
    }
}

console.log(`Hay ${CoincidenciaDevocales} vocales, ${CoincidenciaDeconsonantes} consonantes y la palabra tiene ${palabra.length} letras`);
*/

// Ejercicio 10

/*
let colores = ["azul","amarillo","rojo","verde","rosa"];
let respuesta = prompt("Dime un color");
let coincide = false;

for (let i= 0;i<colores.length;i++){
    if (respuesta == colores[i]){
        coincide = true;
    }
}

if (coincide == true){
    console.log("Si existe");
}
else {
    console.log("No existe");
}
*/
