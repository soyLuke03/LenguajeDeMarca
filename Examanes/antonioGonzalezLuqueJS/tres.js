function mostrar(){
    let provincias = ["Almería","Sevilla","Cadiz","Huelva","Malaga","Granada","Jaen","Cordoba"]

    provincias.sort();

    let lienzo = document.getElementById("pintar")

    for(let i in provincias){
        let tr = document.createElement("table")
        tr.setAttribute("border","2")
        tr.setAttribute("width","120");
        lienzo.appendChild(tr);
        nodo = document.createTextNode(provincias[i]);
        tr.appendChild(nodo);
    }

    document.getElementById("boton").style.display="none"
}

