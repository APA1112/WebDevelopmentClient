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

  document.getElementById("name").addEventListener("blur", function(){
    if(!comprobarNombre(this.value)){
        document.getElementById("name").classList.add("error");
        document.getElementById("name").textContent = "Dato no válido";
    } else {
        document.getElementById("name").classList.remove("error");
    }
  });

  document.getElementById("direction").addEventListener("blur", function(){
    if(!comprobarDireccion(this.value)){
        document.getElementById("direction").classList.add("error");
        document.getElementById("direction").textContent = "Dato no válido";
    } else {
        document.getElementById("direction").classList.remove("error");
    }
  });

  document.getElementById("tel").addEventListener("blur", function(){
    if(!comprobarTelefono(this.value)){
        document.getElementById("tel").classList.add("error");
        document.getElementById("tel").textContent = "Dato no válido";
    } else {
        document.getElementById("tel").classList.remove("error");
    }
  });

  document.getElementById("dni").addEventListener("blur", function(){
    if(!comprobarDNI(this.value)){
        document.getElementById("dni").classList.add("error");
        document.getElementById("dni").textContent = "Dato no válido";
    } else {
        document.getElementById("dni").classList.remove("error");
    }
  });

  document.getElementById("email").addEventListener("blur", function(){
    if(!comprobarEmail(this.value)){
        document.getElementById("email").classList.add("error");
        document.getElementById("email").textContent = "Dato no válido";
    } else {
        document.getElementById("email").classList.remove("error");
    }
  });
  
  document.getElementById("localidad").addEventListener("blur", function(){
    if(!comprobarLocalidad(this.value)){
        document.getElementById("localidad").classList.add("error");
        document.getElementById("localidad").textContent = "Dato no válido";
    } else {
        document.getElementById("localidad").classList.remove("error");
    }
  });
}

function comprobarNombre(nombre){
    const expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s\'-]+$/;
    console.log(expresionRegular.test(nombre));
    return expresionRegular.test(nombre);
}

function comprobarDireccion(direccion){
    const expresionRegular = /^[A-Za-z0-9\s,.-]+$/;
    console.log(expresionRegular.test(direccion));
    return expresionRegular.test(direccion);
}

function comprobarTelefono(telefono){
    const expresionRegular = /^[6-9]\d{8}$/;
    console.log(expresionRegular.test(telefono));
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
    console.log(letraDNI === letraCalculada);
    return letraDNI === letraCalculada;//Devuelve true si la letra pasada coincide con la generada
}

function comprobarEmail(email){
    const expresionRegular = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/;
    console.log(expresionRegular.test(email));
    return expresionRegular.test(email);
}

function comprobarLocalidad (localidad){
    const expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s.'-]+$/;
    console.log(expresionRegular.test(localidad));
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
