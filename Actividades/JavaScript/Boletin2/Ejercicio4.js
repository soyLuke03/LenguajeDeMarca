function Palabras (){
    let listaPalabra=[];

    for(i=0; i<5; i++){
        let palabra =prompt(String('Introduce la palabra que quieres :'));
        listaPalabra[i]=palabra;
    }
    alert(`Esta es la primera palabra: ${listaPalabra[0]}`);
    alert(`Esta es la ultima palabra: ${listaPalabra[listaPalabra.length-1]}`);
    alert(`Numero de palabras presentes: ${listaPalabra.length}`);
    listaPalabra.sort();
    alert(`Palabras ordenadas alfabeticamente: ${listaPalabra}`);

}

Palabras();