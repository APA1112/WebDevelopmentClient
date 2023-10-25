const resoluciones = [
  "1920x1080",
  "1680x1050",
  "1600x1024",
  "1600x900",
  "1440x1080",
];
function main() {
  var resolucionActual = window.screen.width + "x" + window.screen.height;
  console.log(resolucionActual);
  var radios = document.getElementsByName("resolucion");
  for (radio of radios) {
    if (resolucionActual === resoluciones[radio.value]) {
      radio.checked = true;
    }else{
      
    }
  }
}
window.addEventListener("DOMContentLoaded", main);
