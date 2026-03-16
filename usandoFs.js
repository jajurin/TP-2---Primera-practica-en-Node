import fs from "fs";

function copiar(rutaEntrada, rutaSalida) {

    const contenido = fs.readFileSync(rutaEntrada, "utf-8");

    fs.writeFileSync(rutaSalida, contenido, "utf-8");

    console.log(fs.readFileSync(rutaSalida, "utf-8"));
}

export default copiar;