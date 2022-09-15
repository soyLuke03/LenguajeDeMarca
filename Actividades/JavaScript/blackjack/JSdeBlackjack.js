function inicio(){  

    let ptsMaquina = 0;
    let numeroRandom = 0;
    let ptsPlayer = 0;
    let salir = false;

    document.getElementById("contenidoMaquina").innerText = "";
    document.getElementById("contenidoJugador").innerText = "";

    while (ptsMaquina<=21 && salir==false){
        numeroRandom = Math.round(Math.random()*10);

        if (ptsMaquina + numeroRandom<21){
            ptsMaquina += numeroRandom;
        }
        if (ptsMaquina + numeroRandom>=21){
            salir = true;
        }
        console.log(ptsMaquina)
        document.getElementById("contenidoMaquina").innerText += (ptsMaquina + '\n');
    }
    document.getElementById("contenidoMaquina").innerText += ('Puntuacion final: ' + ptsMaquina + '\n');


    do{
    opc = String(prompt("s-Jugar. n-Pasar"));
        
        if (opc=="s"){
            numeroRandom = Math.round(Math.random()*10);
            ptsPlayer += numeroRandom;
            alert(ptsPlayer + ' puntos');
            document.getElementById("contenidoJugador").innerText += (ptsPlayer + '\n');
        }
    }while (ptsPlayer<=21 && opc=="s");

    document.getElementById("contenidoJugador").innerText += ('Puntuacion final: ' + ptsPlayer + '\n');


    if (ptsPlayer <= 21 && ptsMaquina < ptsPlayer){
        alert("Player gana");
    }
    else if(ptsMaquina<=21 && ptsPlayer <= 21 && ptsMaquina==ptsPlayer){
        alert("Empate...");
    }
    else {
        alert("Maquina gana");
    }


    
}

function reboot(){
    document.getElementById("contenidoMaquina").innerText = "Maquina";
    document.getElementById("contenidoJugador").innerText = "Jugador";

}








