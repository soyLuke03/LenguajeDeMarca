
let ul = document.getElementById("raiz");

function delUno(){

    ul.removeChild(ul.firstChild);
    
}

function delUltim(){

    ul.removeChild(ul.lastChild);

}

function anadir(){
    let texto = prompt("Dame un texto");
    let nodoTexto = document.createTextNode(texto);
    let lis = document.createElement("<li>");
    nodoTexto.append(texto);
    ul = document.getElementById("raiz").appendChild(lis);


}