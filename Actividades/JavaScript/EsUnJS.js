//Ejercicios basicos de String y Math
    /* Ejerc 1
        
           
            let numero = -4;
            let palabra = 'Hola mundo';
            let respuesta = true;
            const pi = 3.14;
            numero = 54;
            // se declara undefined
            console.log(numero,palabra,respuesta,pi);
            //pi = 3.1415; da error porque es una constante

                
            
            // Ejerc 2
                
            let n1 = 5;
            let n2 = 2;

            console.log(n1+n2);
            console.log(n1-n2);
            console.log(n1*n2);
            console.log(n1/n2);
            console.log(n1%n2);

            let miNombre = 'Luke';
            console.log('hola ' + miNombre);
                

            // Ejerc 3
                
            let a = 5
            console.log(a);
            console.log(a++);
            console.log(a);
            // Se muestra 'a' y 'a' tras sumarle 1.
            // Se mostraría un 6 aunque 'a' pasa a ser 7.
            console.log(a);
            console.log(a--);
            console.log(a);
            console.log(a-3);
                

            // Ejerc 4
                
            let cadena = 'Hola mundo';
            console.log(cadena.length);
            console.log(cadena.toUpperCase);
            console.log(cadena.toLowerCase);
            console.log(cadena.indexOf('o'));
            console.log(cadena.indexOf('Hola'));
            console.log(cadena.replace('mundo','Youtube'));
            console.log(cadena.substring(5));
            console.log(cadena.startsWith('h'));
            console.log(cadena.startsWith('H'));
            console.log('r'.repeat(10));
            let nombre='luke';let apellido = 'gonzalez';let edad = 19;
            console.log(`${nombre} ${apellido} ${edad}`);
                

            // Ejerc 5
                
            let numeroRandom = Math.round(Math.random()*100); console.log(numeroRandom);
            console.log(Math.PI);
            console.log(Math.round(Math.random() * (10 - 5)) + 5);
            console.log(Math.sign(-5)); // Muestra si es positivo o negativo, si es negativo es -1
            console.log(Math.sign(0));
            console.log(Math.sign(5));
        */


//Ejercicios basicos de Condicionales
    /* Ejerc 1
        
        let num = 0;
        if (num == 0){
            console.log(`${num} es cero`);
        }
        else if (num > 0){
            console.log(`${num} es mayor que cero`);
        }
        else {
            console.log(`${num} es menor que cero`);
        }
         
    // Ejerc 2
         
        let n1 = 5;
        let n2 = 1;

        if (n1 > 0 && n2 > 0){
            console.log("Ambos son mayor que 0");
        }
        else if (n1 < 0 || n2 < 0){
            if (n1 < 0) console.log("n1 es menor que 0");
            if (n2 < 0) console.log("n2 es menor que 0");
        }
         
    // Ejerc 3
          
        let cadena = "Hola";

        if (cadena.length > 4) console.log("La cadena es de longitud mayor que 4");
        else if (cadena.length == 4) console.log("La cadena es de longitud 4");
        else if (cadena.length < 4) console.log("La cadena es de longitud menor que 4");
         
    // Ejerc 4
         
        let a = prompt("Dame un numero: ");
        let b = prompt("Dame otro numero");
        let c = prompt("Dame el ultimo numero");

        

        if (a>b && a>c){
            if (b>c){
                console.log(`${a}>${b}>${c}`)
            }
            if (c>b){
                console.log(`${a}>${c}>${b}`)
            }
        }
        if (b>a && b>c){
            if (a>c){
                console.log(`${b}>${a}>${c}`)
            }
            if (c>a){
                console.log(`${b}>${c}>${a}`)
            }
        }
        if (c>a && c>b){
            if (a>b){
                console.log(`${c}>${a}>${b}`)
            }
            if (b>a){
                console.log(`${c}>${b}>${a}`)
            }
        }
         
    // Ejerc 5
   
    function msFuction(){
    
    let a = prompt("Dame un numero: ");
    let b = prompt("Dame otro numero");
    let c = prompt("Dame el ultimo numero");

    let msg;

    if (a>b && a>c){
        if (b>c){
            msg = a + ">" + b + ">" + c;
            document.getElementById("numeros").textContent = msg
        }
        if (c>b){
            msg = a + ">" + c + ">" + b;
            document.getElementById("numeros").textContent = msg
        }
    }
    if (b>a && b>c){
        if (a>c){
            msg = b + ">" + a + ">" + c;
            document.getElementById("numeros").textContent = msg;
        }
        if (c>a){
            msg = b + ">" + c + ">" + a;
            document.getElementById("numeros").textContent = msg;
        }
    }
    if (c>a && c>b){
        if (a>b){
            msg = c + ">" + a + ">" + b;
            document.getElementById("numeros").textContent = msg;
        }
        if (b>a){
            msg = c + ">" + b + ">" + a;
            document.getElementById("numeros").textContent = msg;
        }
    }
    if (a==b && a==c){
        msg = "Son todos iguales";
        document.getElementById("numeros").textContent = msg;
    }
    if (a==b){
        if (a>c){
            msg = a + ">" + c;
            document.getElementById("numeros").textContent = msg;
        }
        if (c>a){
            msg = c + ">" + a;
            document.getElementById("numeros").textContent = msg;
        }
    }
    if (a==c){
        if (a>b){
            msg = a + ">" + b;
            document.getElementById("numeros").textContent = msg;
        }
        if (b>a){
            msg = b + ">" + a;
            document.getElementById("numeros").textContent = msg;
        }
    }
    if (c==b){
        if (a>c){
            msg = a + ">" + c;
            document.getElementById("numeros").textContent = msg;
        }
        if (c>a){
            msg = c + ">" + a;
            document.getElementById("numeros").textContent = msg;
        }
    }
}
        */

//Ejercicios basicos de Operador Ternario

        /*
    let numero = 5;
    console.log((numero%2==0) ? "Es par":"Es impar");
    
    if (numero%2==0){
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }

    switch(numero%2){
        case 0:{
            console.log("Es par");
        }
        break;
        default:{
            console.log("Es impar");
        }
    }
        */

//Ejercicios basicos de Arrays y Metodos
        /*
    let numeros = [1,2,3,4,5];
    console.log("Posición del número 4 es: " + numeros.lastIndexOf(4));
    let resultado = numeros[1] + numeros[2];
    console.log("La suma de 2 y 3 es: " + resultado);

    let array = ["Hola","Chavales","Que sus contais","Hermano"];
    console.log(`La	palabra	${array[1]} tiene ${array[1].length} letras.`)
    
        // 1
    let numbers = [1,2,3,4,5,6];
    console.log(numbers);
        // 2
    let number = 4;
    console.log(Array.isArray(number) + " Number no es un array");
    console.log(Array.isArray(numbers) + " Numbers es un array");
        // 3
    console.log("El primero elemento es " + numbers.shift());
        // 4
    console.log("El último elemento es " + numbers.pop());
        // 5
    numbers.unshift(1);
    console.log(numbers);
        // 6
    console.log(numbers.reverse().join(" "));
        // 7
    numbers.splice(3,4,10,23,54);
    console.log(numbers);
        // 8
    numbers.splice(numbers.indexOf(10),1,10,12,14);
    console.log(numbers);
        */

//Ejercicios basicos de Bucles
        /*
        let answer;
        while (answer != "ASD"){
            answer = prompt("Escriba la contraseña");
        }

        do{
            answer = prompt("Escriba la password");
        }while (answer != "asd");
        
        let i = 0;
        for (i = 10 ; i>0 ; i-- ){
            console.log(i);
        }
        
        let numeros=[0,1,2,3,4,5];
        for (let i = 0;i<numeros.length;i++){
            console.log(`i vale ${i} y el valor de la posición en el array es ${numeros[i]}`)
        }
        
        let nombres = ["Marta","Inma","Joaquín","Javier"];
        for(let nombre in nombres){
            console.log(nombres[nombre]);
        }
        

        // Ejemplo con BREAK
        
        var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
        var letras = cadena.split("");
        var resultado = "";
        
        for(i in letras) {
            if(letras[i] == 'a') {
                break;
            }
            else {
                resultado += letras[i];
            }
        }
        console.log(resultado);
        
        
        // Ejemplo con CONTINUE
        
        var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
        var letras = cadena.split("");
        var resultado = "";
        
        for(i in letras) {
            if(letras[i] == 'a') {
                continue;
            }
            else {
                resultado += letras[i];
            }
        }
        console.log(resultado);
        */
        
//Ejercicios basicos Orientacion a Objetos
        /*
        const persona = {
            nombre: 'Luke',
            edad: 18,
            hijos:['Batman','Yoda','Hulk','IronMan']
        }
        for (const i in persona.hijos){
            console.log(persona.hijos[i]);
        }
        console.log(`Hola ${persona.nombre}, tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos[0]}, ${persona.hijos[1]}, ${persona.hijos[2]}, ${persona.hijos[3]}.`)
        */
        
//Ejercicios basicos Funciones
        /*
        function saludar(){
            return 'Hola desde una función'
        }
        
        for (let i = 0;i<5;i++){
            console.log(saludar());
        }


        function saludarUsuario(nombreUser){
            return 'Hola' + nombreUser
        }
        console.log(saludarUsuario('Luke'));

        function suma(num1, num2){
            res = 0;
            if (num1==3){
                res = num1 + num2;
                return res
            }
            return num1
        }
        console.log(suma(3,1));
        console.log(suma(2,1));
        */
       
//Ejercicios Clases
        /*
        class Libro {
            constructor(titulo,autor,anno,genero){
                this.titulo = titulo
                this.autor = autor
                this.anno = anno
                this.genero = genero

                this.datos = `Titulo: ${titulo}\n Autor: ${autor}\n Anno: ${anno}\n Genero: ${genero}`
            }

            informacion() {
                return `Titulo: ${this.titulo}\n 
                        Autor: ${this.autor}\n
                        Año: ${this.anno}\n
                        Genero: ${this.genero}`
            }
        
        }

        
        let titulo;
        do{
        titulo = prompt('Titulo: ')
        }while(titulo.length==0)

        let autor;
        do{
        autor = prompt('Autor: ')
        }while(autor.length==0)

        let anno;
        do{
        anno =parseInt(prompt('Año: '))
        }while(anno>9999 ||anno<999);


        let tipoGenero = ['aventuras','terror','fantasia']
        let genero
        let bucle = true
        do{
            genero = prompt('Genero: ')
            for (let i=0;i<tipoGenero.length;i++){
                if (tipoGenero[i]==genero){
                    bucle = false;
                }
            }
        }while(bucle==true)
        
        const libro1 = new Libro(titulo,autor,anno,genero);
        
        const libro2 = new Libro('Titulo2','AutorDos','2022','fantasia');
        
        const libro3 = new Libro('Titulo3','MutorTres','2023','terror');
        
        let libros = [libro1,libro2,libro3];

        function mostrarLibros(){
            return console.log(libro1.datos+"\n"+libro2.datos+"\n"+libro3.datos)
        }
        
        function autoresAlfabeticamente() {
            
            let alfabetico = [libro1.autor,libro2.autor,libro3.autor];

            alfabetico.sort();
            

            return console.log(alfabetico);
        }

        function mostrarPorGenero() {

            let generoElegido;

            let tipoGenero = ['aventuras','terror','fantasia']
            let bucle = true
            do{
                generoElegido = prompt('Genero a buscar: ')
                for (let i=0;i<tipoGenero.length;i++){
                    if (tipoGenero[i]==generoElegido){
                        bucle = false;
                    }
                }
            }while(bucle==true) 

            for(let i = 0;i<libros.length;i++){
                 if(generoElegido==libros[i].genero){
                    console.log(libros[i]);
                 }
            }

            return "";
        }
        

        console.log("Mostrar datos")
        mostrarLibros()
        console.log("Autores por orden alfabetico")
        autoresAlfabeticamente()
        console.log("Mostrar datos por genero")
        mostrarPorGenero();
        */

//Ejercicios Arrays
        /*
        let cadena = 'Hola mundo';

        console.log(cadena);
        console.log(cadena.split(' ',2))

        console.log(Array.from('Hola mundo'));
        */

        
        //
        /*
        let arrayLetras = ['b','c','z','a']; 
        console.log(arrayLetras.sort());
        //

        let arrayNumero = [1,8,100,800,3];
        console.log(arrayNumero.sort());
        //Los ordena en función del número que vaya más a la izquierda en la
        // cifra.
        
        //
        Red: 172.100.100.224. Broad:172.100.100.255

        class Usuario {
            constructor(name,online){
                this.name = name;
                this.online = online;
            }
        }

        let arrayUsers = [new Usuario("Felipe",true),
                        new Usuario("Joseba",false),
                        new Usuario("Luke",false),
                        new Usuario("Herme",true),
                        new Usuario("Javi",true),
                        new Usuario("Vicente",true)]

        console.log(arrayUsers.reduce(usuario.online="true");
        */
//Ejercicios DOM


        
        
        function incluir(){
           
            let elemento = document.createElement("li");
            let cosa = document.getElementById("cosa").value;
            let texto = document.createTextNode(cosa);

            
            elemento.appendChild(texto);

            let lista = document.getElementById("lista");
            lista.appendChild(elemento);
        }

        function excluir(){
            let lista = document.getElementById("lista");
            let nodoBorrar = document.getElementsByTagName("li")[0];
            lista.removeChild(nodoBorrar);
        }

        

