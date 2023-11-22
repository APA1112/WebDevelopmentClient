const pueblosProvincias = {
  Jaen: [
    "Jaen",
    "Linares",
    "Andujar",
    "Ubeda",
    "Alcala la Real",
    "Baeza",
    "Martos",
    "Torredonjimeno",
    "Mancha Real",
    "La Carolina",
  ],
  Cordoba: [
    "Cordoba",
    "Lucena",
    "Puente Genil",
    "Montilla",
    "Priego de Cordoba",
    "Palma del Reio",
    "Cabra",
    "Baena",
    "Posoblanco",
    "La Carlota",
  ],
  Sevilla: [
    "Sevilla",
    "Dos Hermanas",
    "Alcalá de Guadaira",
    "Utrera",
    "Mairena de Aljafare",
    "Écija",
    "Carmona",
    "La Rinconada",
    "Tomares",
    "Los Palacios y Villafranca",
  ],
  Huelva: [
    "Huelva",
    "Almonte",
    "Moguer",
    "Lepe",
    "Isla Cristina",
    "Ayamonte",
    "Cartaya",
    "La Palma del Condado",
    "Bollullos Par del Condado",
  ],
  Cadiz: [
    "Cadiz",
    "Jerez de la Frontera",
    "Algeciras",
    "San Fernando",
    "El Puerto de Santa Maria",
    "Chiclana de la Frontera",
    "La Linea de la Concepcion",
    "Sanlúcar de Barrameda",
    "Puerto Real",
    "Rota",
  ],
  Malaga: [
    "Malaga",
    "Marbella",
    "Mijas",
    "Torremolinos",
    "Benalmádena",
    "Fuengirola",
    "Velez-Malaga",
    "Estepona",
    "Antequera",
    "Rincon de la Victoria",
  ],
  Granada: [
    "Granada",
    "Armilla",
    "Maracena",
    "Motril",
    "Almuñécar",
    "Baza",
    "Guadix",
    "Loja",
    "Santa Fe",
    "Atarfe",
  ],
  Almeria: [
    "Almeria",
    "Roquetas de Mar",
    "el Ejido",
    "Nijar",
    "Huercal-Overa",
    "Vicar",
    "Adra",
    "Huercal de Almeria",
    "Vera",
    "Berja",
  ],
};
function main() {
    crearCheckbox(pueblosProvincias, "opciones");
    mostrarEscudo("Malaga", "escudo");
}
//crearCadenaCheckbox es una funcion que recive una cadena como parametro 
//ygenera el checox con su label
function crearCheckbox(cadena) {}
//mostrarEscudo es una funcion a la cual le pasamos un string y un id y nos muestra
//modifica el src para mostrar la imagen que contenga el string
function mostrarEscudo(provincia, idImagen){
    document.getElementById(idImagen).src = `./Escudos/${provincia}.png`;
}
//buscarElemento es una funcion que recibe como parametros un elemento y arrayAsociativo
//y devuelve la clave que contenga dicho elemento, si no hay ninguna devuelve null.
function buscarElemento(cadena, arrayAsociativo){
    let claves = Object.keys(arrayAsociativo);
    for (let i=0; i<claves.length; i++){
        if(arrayAsociativo[claves[i]].includes(cadena)){
            return claves[i];
        }
    }
    return null;
}
window.addEventListener("DOMContentLoaded", main);