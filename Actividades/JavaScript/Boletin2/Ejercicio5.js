class Coche{
    constructor(marca,modelo,anyo){
        this.marca=marca;
        this.modelo=modelo;
        this.anyo=anyo;
    }

}

const c1=  new Coche('Toyota','Supra',1990);
const c2 = new Coche('Renault','Megane',2003);
const c3 = new Coche('Lamborghini','Aventador',2019);
const c4 = new Coche('Ferrari','California',2012);

document.getElementById('Coche1A').innerHTML= "Marca: " + c1.marca;
document.getElementById('Coche1B').innerHTML= "Modelo: " + c1.modelo;
document.getElementById('Coche1C').innerHTML= "Año: " +c1.anyo;

document.getElementById('Coche2A').innerHTML= "Marca: " + c2.marca;
document.getElementById('Coche2B').innerHTML= "Modelo: " + c2.modelo;
document.getElementById('Coche2C').innerHTML= "Año: " +c2.anyo;

document.getElementById('Coche3A').innerHTML= "Marca: " + c3.marca;
document.getElementById('Coche3B').innerHTML= "Modelo: " + c3.modelo;
document.getElementById('Coche3C').innerHTML= "Año: " +c3.anyo;

document.getElementById('Coche4A').innerHTML= "Marca: " + c4.marca;
document.getElementById('Coche4B').innerHTML= "Modelo: " + c4.modelo;
document.getElementById('Coche4C').innerHTML= "Año: " +c4.anyo;

