function muestraOculta(id) {
    var elemento = document.getElementById('contenidos'+id);
    var enlace = document.getElementById('enlace'+id);
  
    if(elemento.style.display == "" || elemento.style.display == "block") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
  }