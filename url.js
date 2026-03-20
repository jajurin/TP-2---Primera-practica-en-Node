import parsearUrl from "./parsearUrl.js";

function urlParseada(urlString) {
  const url = new URL(urlString);
  return parsearUrl(url);
}

export default urlParseada;