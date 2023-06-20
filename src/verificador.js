function verificar(cadena) {
  var letras = cadena.split("")
  var resp = "Incorrecto";
  if (letras[0] == "[" && letras[letras.length - 1] == "]") {
    resp = "Correcto";
  }
  if(letras.length>2)
  {
    if (letras[1] == "[" && letras[letras.length - 2] == "]") {
      resp = "Correcto";
    }
  }
  return resp;
}
export default verificar;
