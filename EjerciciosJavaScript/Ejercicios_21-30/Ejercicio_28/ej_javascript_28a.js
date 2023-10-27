const fechaVacaciones = new Date("2023-12-19");
//Función para restar dos fechas
function restarFechas(a, b) {
  var resta = 0;
  resta = Math.floor((a - b) / (1000 * 60 * 60 * 24));
  return resta;
}
function actualizarContador() {
  const fecha = new Date();
  var restaFechas = restarFechas(fechaVacaciones, fecha);
  console.log(restaFechas);

  if (restaFechas >= 0) {
    var decenas = Math.floor(restaFechas / 10);
    var unidades = restaFechas % 10;

    document.getElementById("decenas").src = `imagenes/num${decenas}.png`;
    document.getElementById("unidades").src = `imagenes/num${unidades}.png`;
  }
}

window.addEventListener("DOMContentLoaded", actualizarContador);
