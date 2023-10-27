const fechaVacaciones = new Date("2023-12-19");

function actualizarContador() {
  const fecha = new Date();
  const restaFechas = Math.floor(
    (fechaVacaciones - fecha) / (1000 * 60 * 60 * 24)
  );

  if (restaFechas >= 0) {
    //Si no voy a poner HTML usar textContent
    document.getElementById("resultado").textContent = `Faltan: ${restaFechas} dias`;
  }
}

window.addEventListener("DOMContentLoaded" ,actualizarContador);
