function verificar(cadena) {
  var letras = cadena.split("")
  var resp = "Incorrecto";
  if (letras[0] == "[" && letras[letras.length - 1] == "]") {
    resp = "Correcto";
  }
  return resp;
}
export default verificar;