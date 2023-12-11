let cadenaDatos =
  "1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1,2,3,4,5,6,7,8, 47, 48, 49";
function main() {
  x = document.getElementsByTagName("td");
  console.log(x);
  let tabla = crearTabla(7, 7);
  let datos = prepararDatos(cadenaDatos, ",");
  rellenarTabla(tabla, datos);
}
//Le pasamos a la funcion el numero de filas y columnas que queremos que tenga la tabla y nos la crea
//usando los metodos del createElement
function crearTabla(filas, columnas) {
  var tabla = document.createElement("table");
  for (var i = 0; i < filas; i++) {
    var fila = tabla.insertRow(i);
    for (var j = 0; j < columnas; j++) {
      fila.insertCell(j);
    }
  }
  document.body.appendChild(tabla);
  return tabla;
}
function prepararDatos(cadenaDatos, separador) {
  return cadenaDatos.split(separador);
}

function rellenarTabla(tabla, datos) {
  var filas = tabla.rows.length;
  var columnas = datos.length / filas;
  for (var i = 0; i < filas; i++) {
    for (var j = 0; j < columnas; j++) {
      tabla.rows[i].cells[j].textContent = datos[i * columnas + j];
    }
  }
}

window.addEventListener("DOMContentLoaded", main);
