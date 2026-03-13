import usandoConsoleLog from "./usandoConsoleLog.js";
import matematica from "./matematica.js";
import alumno from "./alumno.js";

const mensaje = usandoConsoleLog("Alan");

const suma = matematica.sumar(1,2) ;
const dividi = matematica.dividir(2,1);
const multiplica = matematica.multiplicar(2,9);
const sacarAreaCircul = matematica.sacarAreaCirculo(400);

function mostrarMensaje(){

    console.log(suma)
    console.log(dividi)
    console.log(multiplica)
    console.log(sacarAreaCircul)

}
const alumno1= new alumno.Alumno()

mostrarMensaje();