function main() {
  var boton = document.getElementById("open");
  boton.addEventListener("click", irWeb);
}

function irWeb() {
  var lista = document.getElementById("webs");
  var seleccion = lista.selectedIndex;
  if (seleccion) {
    console.log(lista.value);
    window.open(lista.value, "_blank");
  }
}

window.addEventListener("DOMContentLoaded", main);
