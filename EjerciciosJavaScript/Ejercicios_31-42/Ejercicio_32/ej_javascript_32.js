const provinciasEspana = [
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ciudad Real",
  "Córdoba",
  "Cuenca",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Islas Baleares",
  "Jaén",
  "La Coruña",
  "La Rioja",
  "Las Palmas",
  "León",
  "Lérida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarra",
  "Orense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
];

function main() {
  const selectProvincias = document.getElementById("provincias");
  let cadenaProvincias = generarSelect(provinciasEspana);
  selectProvincias.innerHTML = cadenaProvincias;
}

function comprobarNombre(nombre){
    const expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s\'-]+$/;
    return expresionRegular.test(nombre);
}

function comprobarDireccion(direccion){
    const expresionRegular = /^[A-Za-z0-9\s,.-]+$/;
    return expresionRegular.test(direccion);
}

function comprobarTelefono(telefono){
    const expresionRegular = /^[6-9]\d{8}$/;
    return expresionRegular.test(telefono);
}

function comprobarDNI(dni) {
    const expresionRegular = /^[0-9]{8}[A-Z]$/;
    if (!expresionRegular.test(dni)) {
        return false;
    }
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letraDNI = dni.charAt(8); //Cogemos la letra del DNI
    const numeroDNI = dni.substring(0, 8); //Cogemos el numero del DNI
    const indice = numeroDNI % 23;
    const letraCalculada = letras[indice];
    return letraDNI === letraCalculada;//Devuelve true si la letra pasada coincide con la generada
}

function comprobarEmail(email){
    const expresionRegular = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/;
    return expresionRegular.test(email);
}

function comprobarLocalidad (localidad){
    const expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s.'-]+$/;
    return expresionRegular.test(localidad);
}

function generarSelect(provinciasArray) {
  let cadenaProvincias;
  for (const provincia of provinciasArray) {
    cadenaProvincias += `<option value="${provincia}">${provincia}</option>`;
  }
  return cadenaProvincias;
}

window.addEventListener("DOMContentLoaded", main);
