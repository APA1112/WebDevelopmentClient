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
var letrasCorrectas=[];
var vidas = 5;
let acertadas = 0;
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
  if(letrasCorrectas.length === 0){
    word.textContent = "Pulsa una letra para iniciar";
  } else {
    word.textContent = letrasCorrectas.join(' ');
  }
};

function comprobarLetra(palabra, letra){
  palabra = palabra.toLowerCase();
  palabra = palabra.split('');
  letra = letra.toLowerCase();
  let letraEncontrada = false;
  
  for (let i = 0; i < palabra.length; i++){
    if (palabra[i] === letra) {
      letrasCorrectas[i] = letra;
      acertadas++;
      letraEncontrada = true;
    } else if (letrasCorrectas[i] === undefined) {
      letrasCorrectas[i] = '_';
    }
  }

  document.getElementById('letras').textContent += letra + " ";

  if(palabra.join('') === letrasCorrectas.join('')){
    alert("Has ganado");
    letrasCorrectas = [];
    acertadas = 0;
    choosenWord = chooseWord(words.length, words);
    document.getElementById('letras').textContent = " ";
  } 
  if(!letraEncontrada)
  {
    document.getElementById(vidas).classList.toggle("visible");
    vidas--;
    console.log(vidas);
    if (vidas===0){
      alert ("Has perdido");
      letrasCorrectas = [];
      acertadas = 0;
      choosenWord = chooseWord(words.length, words);
      document.getElementById('letras').textContent = " ";
      vidas = 6;
    }
  } 
  return letrasCorrectas;
}
window.addEventListener("DOMContentLoaded", main);
