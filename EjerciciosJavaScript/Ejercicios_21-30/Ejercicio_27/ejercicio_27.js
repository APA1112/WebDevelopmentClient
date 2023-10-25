function main() {
  var resolucionActual = window.screen.width + "x" + window.screen.height;
  var radios = document.getElementsByName("resolucion");
  radios.forEach(function (radio) {
    if (radio.value === resolucionActual) {
      radio.checked = true;
    }
  });
}

window.addEventListener("DOMContentLoaded", main);
