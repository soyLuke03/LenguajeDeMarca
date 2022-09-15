
let arrayDisc = [];

class disco {
    constructor(nombre, grupo,fecha,tipo,localizacion,prestado){
        this.nombre=nombre;
        this.grupo=grupo;
        this.fecha=fecha;
        this.tipo=tipo;
        this.localizacion=localizacion;
        this.prestado=prestado;
    }


    constructor(){
        this.nombre="";
        this.grupo="";
        this.fecha="";
        this.tipo="";
        this.localizacion=0;
        this.prestado=false;
    }

    constructor(nombre, grupo,fecha,tipo,localizacion){
        this.nombre=nombre;
        this.grupo=grupo;
        this.fecha=fecha;
        this.tipo=tipo;
        this.localizacion=localizacion;
        this.prestado=false;
    }

    cambiarnumero(numero, localizacion){
        if(localizacion==numero){

        }
    }

    mostrarInfo(nombre){
        for(let i of disco){
            if(i.nombre==nombre){
                console.log(`Nombre: ${this.nombre}, Grupo: ${this.grupo}, Fecha: ${this.fecha}, Tipo: ${this.tipo}, Localizacion: ${this.localizacion}, Prestado: ${this.prestado}`);
            }
        }
    }

}


function crearDisco() {
        let name = document.getElementById("nombre").value;
        let grupo = document.getElementById("grupo").value;
        let fecha = document.getElementById("fecha").value;
        let tipo = document.getElementById("tipo").value;
        let localizacion = document.getElementById("localizacion").value; 
        let prestado = document.getElementById("prestado").value;

        const disc1 = new disco(name,grupo,fecha,tipo,localizacion,prestado);
        arrayDisc.push(disc1);
}

