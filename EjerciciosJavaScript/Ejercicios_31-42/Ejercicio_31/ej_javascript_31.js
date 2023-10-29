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
const main = function () {
  createButtons();
  showWord();
};
//Funcion con la cual creamos los botones para jugar, ademas le añadimos
//un eventListener para cuando lo pulsemos que se añadan al resgitro de letras
const createButtons = function () {
  var buttons = document.getElementById("botones");
  var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  for (var i = 0; i < alphabet.length; i++) {
    var letter = alphabet[i];
    var button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", function () {
      wordHistorical(this.textContent);
      if (choosenWord.includes(this.textContent)) {
        console.log(`La palabra contiene la letra ${this.textContent}`);
      } else {
        checkLifes(vidas);
        var imgShow = document.getElementById(vidas);
        imgShow.classList.toggle("visible");
        vidas--;
      }
    });
    // Añadimos el botón al div
    buttons.appendChild(button);
  }
};
//Elegimos una palabra aleatoria del array que pasamos como parametro (b) y de su longitud
//la cual tambien pasamos como parametro (a)
const chooseWord = function (a, b) {
  var randomNum = Math.floor(Math.random() * a);
  return b[randomNum];
};
choosenWord = chooseWord(words.length, words);
//Mostramos la palabra aleatoria que generamos con la función chooseWord
const showWord = function () {
  var word = document.getElementById("word");
  word.textContent = choosenWord;
};
//Esta función concatena lo que haya en el elemento con el id letras
//junto al valor de la variable a
const wordHistorical = function (a) {
  var historical = document.getElementById("letras");
  historical.textContent += a + " ";
};
//Comprobamos que la variable que le pasamos por parametro no sea cero
const checkLifes = function(a){
  if(a == 0){
    alert("Has perdido");
  }
}
window.addEventListener("DOMContentLoaded", main);
