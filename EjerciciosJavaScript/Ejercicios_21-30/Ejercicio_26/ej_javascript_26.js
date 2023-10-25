function irWeb() {
  var lista = document.getElementById("webs");
  var seleccion = lista.selectedIndex;
  if (seleccion > 0) {
    console.log(lista.value);
    window.open(lista.value, "_blank");
  }
}

window.addEventListener("DOMContentLoaded", irWeb);
