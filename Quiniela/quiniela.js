function main() {
  x = document.getElementsByTagName("td");
  console.log(x);
  let tabla = crearTabla(7, 7);
  let datos = crearDatos(1,49);
  rellenarTabla(tabla, datos);
}
 function crearDatos(inicio, fin){
  let datos = [];
  for (let i = inicio; i<=fin; i++){
    datos.push(i);
  }
  return datos;
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
