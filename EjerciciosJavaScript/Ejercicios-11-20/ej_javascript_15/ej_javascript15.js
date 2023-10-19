var nombres = [];
var edades = [];
function main() {
  document.getElementById("crear").addEventListener("click", introducirDatos);
  document.getElementById("romper").addEventListener("click", romperDatos);
}
function introducirDatos() {
  nombres = [];
  edades = [];
  const variables = [];
  for (var i = 0; i < 5; i++) {
    var nombre = prompt("Introduce el nombre " + (i + 1));
    nombres.push(nombre);
    variables.push(nombre);
    for (let j = 0; j < 1; j++) {
      var edad = prompt("Introduce la edad " + (i + 1));
      edades.push(edad);
      variables.push(edad);
    }
  }
  var resultado = [];
  for (var i = 0; i < 5; i++) {
    resultado += nombres[i] + "*";
    for (let j = 0; j < 1; j++) {
      resultado += edades[i] + "#";
    }
  }
  alert(resultado);
}
function romperDatos() {
  var tabla = "";
  var j = edades.length-1;
  for (var i = 0; i < nombres.length; i++) {
    /**
     * Guardamos todas las filas en la variable tabla ya que si no
     * sobreescribiriamos todo el rato y solo aparecería el último valor del array
     */
    tabla += "<tr><td>" + nombres[i] + "</td><td>" + edades[j] + "</td></tr>";
    j--;
  }
  document.getElementById("tabla").innerHTML = tabla;
}
window.addEventListener("load", main);
