const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const meses = [
  "enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
function mostrarFecha() {
  var fecha = new Date();
  var fechaCompleta1 =
    fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
  document.getElementById("fecha1").innerHTML = "Fecha: " + fechaCompleta1;
  let dia = dias[fecha.getDay()];
  let mes = meses[fecha.getMonth()];
  var fechaCompleta2 =
    "Hoy es " +
    dia +
    " " +
    fecha.getDate() +
    " de " +
    mes +
    " de " +
    fecha.getMonth() +
    " de " +
    fecha.getFullYear();
  document.getElementById("fecha2").innerHTML = fechaCompleta2;

  document.getElementById("hora").innerHTML =
    fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  setInterval(mostrarFecha, 1000);
}

window.addEventListener("load", mostrarFecha);
