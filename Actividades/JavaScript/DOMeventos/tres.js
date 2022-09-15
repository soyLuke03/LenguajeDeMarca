
function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;

    let nombreCompleto = (nombre + " " + apellido);

    document.getElementById("saludo").innerHTML ='Hola ' + nombreCompleto + ' bienvenido a esta pagina';
}