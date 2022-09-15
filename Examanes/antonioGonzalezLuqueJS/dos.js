function insertar(){
    lista = document.getElementsByTagName("ul")[0];
    nuevoLi = document.createElement("li");

    texto = document.getElementById("texto").value;
   
    nodotexto = document.createTextNode(texto);


    lista.appendChild(nuevoLi);
    nuevoLi.appendChild(nodotexto);


    console.log(lista)

}
function eliminar(){
    lista = document.getElementById("lista")
    numeroElegido = document.getElementById("numero").value;


    let nodoABorrar = lista.getElementsByTagName("li")[numeroElegido];

    lista.removeChild(nodoABorrar);
}

