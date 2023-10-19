function contarLetras() {
  var frase = document.getElementById("frase").value.toLowerCase();
  var contadorVocales = 0;
  var contadorConsonantes = 0;

  for (var i = 0; i < frase.length; i++) {
    var caracter = frase.charAt(i);
    // Verificar si el carácter es una vocal
    if (caracter.match([aeiouáéíóúü])) {
      contadorVocales++;
    } else {
      contadorConsonantes++;
    }
  }

  var resultado = `Vocales: ${contadorVocales} <br/ >Consonantes: ${contadorConsonantes}`;
  document.getElementById("resultado").innerHTML = resultado;
}