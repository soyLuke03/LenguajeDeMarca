const tabla = document.getElementById("tabla");

function ordenar(id){

    let filas = [];

    let n1 = (document.getElementsByTagName("tr")[0].getElementsByTagName("td")[id-1].textContent);
    let n2 = (document.getElementsByTagName("tr")[1].getElementsByTagName("td")[id-1].textContent);
    let n3 = (document.getElementsByTagName("tr")[2].getElementsByTagName("td")[id-1].textContent);
    



    filas.push(n1,n2,n3)
    filas = filas.sort((a,b) => a - b);

    for (let i =0;i<filas.length;i++){
        document.getElementsByTagName("tr")[i].getElementsByTagName("td")[id-1].innerHTML = filas[i];
    
    }
    

    console.log(filas);

}