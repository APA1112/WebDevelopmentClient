const words = [
  "manzana",
  "naranja",
  "pera",
  "uva",
  "sandia",
  "fresa",
  "platano",
  "cereza",
  "limon",
  "melocoton",
  "kiwi",
  "piña",
  "mango",
  "pomelo",
  "frambuesa",
  "arandano",
  "ciruela",
  "albaricoque",
  "mandarina",
  "granada",
];
var choosenWord;
var letrasCorrectas;
var vidas = 6;
var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");

const main = function () {
  var divBotones = document.getElementById("botones");
  divBotones.innerHTML = crearBotones(alphabet);
  choosenWord = chooseWord(words.length, words);
  showWord();
  document.getElementById('botones').addEventListener('click', function(event) {
    const botonPulsado = event.target;
    if (botonPulsado.tagName === 'BUTTON') {
      let letra = botonPulsado.textContent;
      let resultado = comprobarLetra(choosenWord, letra);
      console.log(resultado);
      showWord();
    }
  });
};

//Funcion con la cual creamos los botones, le pasamos el array con las letras y devuelve un string con los botones
function crearBotones(alphabet){
  let botonesHTML = '';
  for (let i = 0; i < alphabet.length; i++) {
    const letra = alphabet[i];
    botonesHTML += `<button>${letra}</button>`;
  }
  return botonesHTML;
}
//Elegimos una palabra aleatoria del array que pasamos como parametro (b) y de su longitud
//la cual tambien pasamos como parametro (a)
const chooseWord = function (a, b) {
  var randomNum = Math.floor(Math.random() * a);
  return b[randomNum];
};
//Mostramos la palabra aleatoria que generamos con la función chooseWord
const showWord = function () {
  var word = document.getElementById("word");
  word.textContent = letrasCorrectas + " " +choosenWord;
};

function comprobarLetra(palabra, letra){
  letrasCorrectas = [];
  palabra = palabra.toLowerCase();
  palabra = palabra.split('');
  letra = letra.toLowerCase();
  for (let i = 0; i < palabra.length; i++){
    if (palabra[i] === letra) {
      letrasCorrectas.push(letra);
    } else {
      letrasCorrectas.push('_');
    }
  }
  return letrasCorrectas;
}
window.addEventListener("DOMContentLoaded", main);
