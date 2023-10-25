const direcciones = [
  "https://www.youtube.com/",
  "https://twitter.com/",
  "https://www.google.es/",
  "https://facebook.com/",
  "https://www.w3schools.com/",
];
function irWeb() {
  var lista = document.getElementById("webs");
  var seleccion = lista.selectedIndex;
  if (seleccion) {
    window.open(direcciones[lista.value], "_blank");
  }
}

window.addEventListener("change", irWeb);
