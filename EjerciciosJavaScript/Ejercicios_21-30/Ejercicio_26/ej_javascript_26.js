var lista = document.getElementsByTagName("option");
var seleccion = lista.selectedIndex;

function irWeb() {
  if (seleccion) {
    window.open(seleccion.value);
  }
}
