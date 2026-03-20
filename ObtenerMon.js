import countryToCurrency from "country-to-currency";

function obtenerMonedaPais(pais) {
  return countryToCurrency[pais.toUpperCase()] || "País no válido";
}



export default obtenerMonedaPais

