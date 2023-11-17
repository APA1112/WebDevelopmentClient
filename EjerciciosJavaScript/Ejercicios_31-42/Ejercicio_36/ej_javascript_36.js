const aficiones = [
  "Música",
  "Cine",
  "Lectura",
  "Informática",
  "Televisión",
  "Videojuegos",
];

function main() {
  let arrayAños = generarAños(1934);
  document.getElementById("fechNacimiento").innerHTML =
    generarSelect(arrayAños);
  document.getElementById("aficiones").innerHTML = generarCheck(aficiones);
  let cmpNombre = document.getElementById("name");
  cmpNombre.addEventListener("change", function () {
    if (comprobarCampo(cmpNombre, expresionNombre)) {
      cmpNombre.classList.remove("error");
    }
  });
}

function generarSelect(array) {
  let cadenaelementos = '<option value="0">-Elija una opción-</option>';
  if (!Array.isArray(array)) return "Debe de ser un array";
  for (const elemento of array) {
    cadenaelementos += `<option value="${elemento}">${elemento}</option>`;
  }
  return cadenaelementos;
}
function generarCheck(array) {
  let cadenaCheck = "";
  for (let elemento of array) {
    cadenaCheck += `<input type="checkbox" name="${elemento}" id="${elemento}"><label for="${elemento}">${elemento}</label>`;
  }
  return cadenaCheck;
}
function generarAños(añoInicio, añoFin = new Date().getFullYear()) {
  const resultado = [];
  for (let i = añoInicio; i <= añoFin; i++) {
    resultado.push(i);
  }
  return resultado;
}
function comprobarCampo(campo, expresion) {
  let cadena = campo.value;
  if (cadena.length === 0) {
    campo.classList.add("error");
    alert("No puede haber campos vacios");
    return false;
  }
  return expresion.test(cadena);
}

window.addEventListener("DOMContentLoaded", main);
