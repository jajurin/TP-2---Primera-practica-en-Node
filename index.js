import usandoConsoleLog from "./usandoConsoleLog.js";
import matematica from "./matematica.js";
import Alumno from "./alumno.js";
import copiar from "./usandoFs.js";
import urlParseada from "./url.js"; 
import urlParseadaSafe from "./parsearUrlSafe.js";
import obtenerMonedaPais from "./ObtenerMon.js";


function ej1(){
    const mensaje = usandoConsoleLog("Alan");
    console.log(mensaje);
}

function ej2(){
    const suma = matematica.sumar(1,2);
    const dividi = matematica.dividir(2,1);
    const multiplica = matematica.multiplicar(2,9);
    const sacarAreaCircul = matematica.sacarAreaCirculo(400);

    console.log(suma, dividi, multiplica, sacarAreaCircul);
}

function ej3(){
    const alumne = new Alumno("toilet", "9");
    console.log(alumne);
}

function ej4(){
    copiar("entrada.txt", "salida.txt");
}
function ej5(){
    const miUrl = "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";
    console.log(urlParseada(miUrl));
}
function ej6(){
    const miUrl = ":8080/alumnos/index.htm?curso=2022&mes=mayo"; //lo mandamos directamente a parsearurlsafe

   console.log(urlParseadaSafe(miUrl));
}
function ej7(){
let pais= "us"
    
 console.log(obtenerMonedaPais(pais))
}
function mostrarMensaje(){
    ej1();
    ej2();
    ej3();
    ej4();
    ej5();
    ej6();
    ej7();
}

mostrarMensaje();
