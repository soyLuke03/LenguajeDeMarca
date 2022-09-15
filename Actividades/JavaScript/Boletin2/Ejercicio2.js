function aprobadoONo(){
    let aprobado = false;
    let numero1 = parseInt(prompt("Trimestre 1: "));
    let numero2 = parseInt(prompt("Trimestre 2: "));
    let numero3 = parseInt(prompt("Trimestre 3: "));

    let media = (numero1+numero2+numero3)/3;

    if(media>=5){
        aprobado = true;
    }

    return aprobado;
}