function insertar(){

    
    let posicion = document.getElementById("posicion").value
    let equipo = document.getElementById("equipo").value 
    let puntos = document.getElementById("puntos").value 


    let tabla = document.getElementsByTagName("tbody")[0];
    let nuevoTR = document.createElement("tr");
    let nuevoTD1 = document.createElement("td");
    let nuevoTD2 = document.createElement("td");
    let nuevoTD3 = document.createElement("td");

    let nodoPosicion = document.createTextNode(posicion);
    let nodoEquipo = document.createTextNode(equipo);
    let nodoPuntos = document.createTextNode(puntos);

    let trs = tabla.getElementsByTagName("tr");

    for(let i in trs){

    if(trs[i].getElementsByTagName("td")[0].textContent == posicion){
        trs[i].getElementsByTagName("td")[0].innerText = posicion
        trs[i].getElementsByTagName("td")[1].innerText = equipo
        trs[i].getElementsByTagName("td")[2].innerText = puntos

        
        tabla.removeChild(tabla.lastChild);
    }
    else{

    tabla.appendChild(nuevoTR);
    
    nuevoTR.appendChild(nuevoTD1).appendChild(nodoPosicion);
    nuevoTR.appendChild(nuevoTD2).appendChild(nodoEquipo);
    nuevoTR.appendChild(nuevoTD3).appendChild(nodoPuntos);
    }
}
}