var resolucionActual = window.screen.width + "x" + window.screen.height;
var radios = document.querySelectorAll('input[name="resolucion"]');
radios.forEach(function (radio) {
  if (radio.value === resolucionActual) {
    radio.checked = true;
  }
});
