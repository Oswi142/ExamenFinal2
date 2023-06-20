function verificar(cadena) {
  var letras = cadena.split("")
  var resp = "Incorrecto";
  if (letras[0] == "[" && letras[letras.length - 1] == "]") {
    resp = "Correcto";
  }
  if (letras.length > 2) {
    if (letras[1] == "[" && letras[letras.length - 2] == "]" && letras[0] == "[" && letras[letras.length - 1] == "]") {
      resp = "Correcto";
    }
  }/*
  for(var i=0;i<letras.length;i++)
  {
    if(letras[i]=="[")
    {
      for(var j=i+1;j<letras.length;j++)
      {
        if(letras[j]=="]")
        resp="Correcto";
      }
    }
  }*/
  return resp;
}
export default verificar;
