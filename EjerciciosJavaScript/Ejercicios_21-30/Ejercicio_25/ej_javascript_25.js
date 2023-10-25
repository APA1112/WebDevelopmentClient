function main(){
  var boton = document.getElementById('open');
  boton.addEventListener("click", irWeb);
}

function irWeb() {
  var lista = document.getElementsByTagName("option");
  var seleccion = lista.selectedIndex;
  if (seleccion) {
    window.open(seleccion.value, "_blank");
  }
}

window.addEventListener("DOMContentLoaded", main);