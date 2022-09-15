function ordenacion(){

    let numeros = document.getElementById("numeros").value;

    arrayNumeros = numeros.split(",");

    arrayNumeros.sort((a,b) => a-b);

    document.getElementById("ordenado").innerHTML = arrayNumeros;
}