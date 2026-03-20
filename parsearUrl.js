function parsearUrl(url) {
try{


    if(url.protocol !== "http:" && url.protocol !== "https:"){
        throw new Error("El protocolo no es válido. Solo se permiten http y https.");

    }
    
    if(!url.hostname){
        throw new Error("El hostname es obligatorio.");
    
    }

  let objetoUrl = {
    hostname: url.hostname,
    pathname: url.pathname,
    search: url.search
  };

  return objetoUrl; 

  } catch (error) {
    return ("el error es: " + error.message);
  }
}

export default parsearUrl;