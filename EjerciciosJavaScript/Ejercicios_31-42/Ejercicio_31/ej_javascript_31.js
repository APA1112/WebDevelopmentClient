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
var vidas = 6;
var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");

const main = function () {
  var divBotones = document.getElementById("botones");
  divBotones.innerHTML = crearBotones(alphabet);
  choosenWord = chooseWord(words.length, words);
  console.log(document.getElementById("botones"));
  showWord();
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
  word.textContent = choosenWord;
};
//Esta función concatena lo que haya en el elemento con el id letras
//junto al valor de la variable a
const wordHistorical = function (a) {
  var historical = document.getElementById("letras");
  if (historical.textContent.includes(a)) {
    historical.textContent = historical.textContent;
  } else {
    historical.textContent += a + " ";
  }
};
//Comprobamos que la variable que le pasamos por parametro no sea cero
const checkLifes = function (a) {
  if (a == 0) {
    alert("Has perdido");
  }
};


window.addEventListener("DOMContentLoaded", main);
