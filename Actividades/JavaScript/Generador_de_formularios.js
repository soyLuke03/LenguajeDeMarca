function mensaje(){
    alert("Boton pulsado")
}

function botonInput(){
    var form = document.getElementById("formulario");
    var nuevoBoton = document.createElement("input");
    nuevoBoton.type='button';
    nuevoBoton.name='enviar';
    nuevoBoton.value= document.getElementById("cosa").value;
    nuevoBoton.onclick= function(){mensaje();};

        form.appendChild(nuevoBoton);
}

function textInput(){
    var form = document.getElementById("formulario");
    var nuevaCajaTexto = document.createElement("input");
    nuevaCajaTexto.type='text';
    nuevaCajaTexto.name='texto';
    nuevaCajaTexto.placeholder='Escribir aqui';

        form.appendChild(nuevaCajaTexto);
}

function textPasswordInput(){
    
}