class Producto_Alimenticio {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre= nombre;
        this.precio= precio;
    }
 
}


const pro1 = new Producto_Alimenticio('A55','cereales',99);
const pro2 = new Producto_Alimenticio('A77', 'Almejas', 50);
const pro3 = new Producto_Alimenticio('A88', 'Nueces', 10);

let arrayProductos=[];
arrayProductos.push(pro1);
arrayProductos.push(pro2);
arrayProductos.push(pro3);

function Producto_Info(producto3) {
    return document.getElementById('info').innerHTML= producto3.codigo + " es un codigo " + producto3.nombre+ " es el nombre " + producto3.precio + " es el precio ";
}

function ImprimirDatosDeTodos(){
     return document.getElementById('imprimir').innerHTML="Codigo: " + pro1.codigo + " Nombre: " + pro1.nombre + " Precio: " + pro1.precio + ' ---- '+
            "Codigo: " + pro2.codigo + " Nombre: " + pro2.nombre + " Precio: " + pro2.precio + ' ---- '+
            "Codigo: " + pro3.codigo + " Nombre: " + pro3.nombre + " Precio: " + pro3.precio + '\n';

}

ImprimirDatosDeTodos();
Producto_Info(pro1);
