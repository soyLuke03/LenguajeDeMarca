function crearFila(){
    let tabla = document.getElementById("tabla");
    let fila = document.createElement("tr");
    let columna1 = document.createElement("td");
    let columna2 = document.createElement("td");
    let columna3 = document.createElement("td");

    columna1.innerText = document.getElementById("texto").value;
    columna2.innerText = document.getElementById("texto").value;
    columna3.innerText = document.getElementById("texto").value;

    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);

    tabla.appendChild(fila);
}

function borrarFila(){
    let tabla = document.getElementById("tabla");
    let numero = parseInt(prompt("Introduce la fila a borrar"));
    let nodoABorrar = document.getElementsByTagName("tr")[numero-1];
    nodoABorrar.remove();
}

function reemplazarFila(){
    
    numero = document.getElementById("posInicial").value 
    posicionFinal = document.getElementById("posFinal").value 
    
    
    let columnaElegida = document.getElementsByTagName("tr")[numero];
    let TMP = document.getElementsByTagName("tr")[posicionFinal];

    document.getElementsByTagName("tr")[numero].getElementsByTagName("td")[0].innerText = TMP.getElementsByTagName("td")[0].textContent;
    document.getElementsByTagName("tr")[numero].getElementsByTagName("td")[1].innerText = TMP.getElementsByTagName("td")[1].textContent;
    document.getElementsByTagName("tr")[numero].getElementsByTagName("td")[2].innerText = TMP.getElementsByTagName("td")[2].textContent;

    
    document.getElementsByTagName("tr")[posicionFinal].getElementsByTagName("td")[0].innerText = columnaElegida.getElementsByTagName("td")[0].textContent;
    document.getElementsByTagName("tr")[posicionFinal].getElementsByTagName("td")[1].innerText = columnaElegida.getElementsByTagName("td")[1].textContent;
    document.getElementsByTagName("tr")[posicionFinal].getElementsByTagName("td")[2].innerText = columnaElegida.getElementsByTagName("td")[2].textContent;
    
}