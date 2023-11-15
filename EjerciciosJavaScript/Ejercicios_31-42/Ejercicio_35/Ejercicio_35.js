//Comprobamos que el nombre comienza por mayuscula y no tiene números ni caracteres espaciales
let expresionNombre = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s\'-]+$/;

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
  document.getElementById("fechNacimiento").innerHTML = generarSelect(arrayAños);
  document.getElementById("aficiones").innerHTML = generarCheck(aficiones);
  let cmpNombre = document.getElementById("name");
  cmpNombre.addEventListener('change', comprobarCampo(cmpNombre.textContent, expresionNombre));
}

function generarSelect(array) {
  let cadenaelementos = '<option value="">-Elija una opción-</option>';
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

function comprobarCampo(cadena, expresion) {
  if (cadena.length === 0 ){
    alert ("No puede haber campos vacios");
    return false;
  }
  return expresion.test(cadena);
}

window.addEventListener("DOMContentLoaded", main);
