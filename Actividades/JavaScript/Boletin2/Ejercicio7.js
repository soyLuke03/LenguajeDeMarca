function Articulo(d_escripcion, c_odigo, p_recio){
    this.descripcion=d_escripcion;
    this.codigo=c_odigo;
    this.precio=p_recio;
    this.iva=function(ivaA)
    {
        ivaA += (ivaA*0.21);
        ivaA = ivaA.toFixed(2);
        return ivaA;
    }
    this.total = function(descu)
    {
        descu = descu - (descu*0.05);
        descu = descu.toFixed(2);
        return descu;
    }
    this.toString = function()
    {
        let datos = "<h4>El articulo "+this.codigo+"  <i>("+this.descripcion+
                    ")</i> tiene un precio TOTAL de "+this.total(this.iva(this.precio))+
                    "€</h4>";
        datos += "<h2>Precio "+this.precio.toFixed(2)+" €</h2>";
        datos += "<h2>Con IVA"+this.iva(this.precio)+" €</h2>";
        datos += "<h2>TOTAL "+this.total(this.precio)+" €</h2>";

        document.write(datos);
    }
}

function principal(){
    let datos = [];
    let desc = document.getElementById("desc").value;
    datos.push(desc);
    let cod = document.getElementById("cod").value;
    datos.push(cod);
    let prec = parseFloat(document.getElementById("prec").value);
    datos.push(prec);

    let p = [];
    p=new Articulo(datos[0],datos[1],datos[2]);
    p.toString;
}
