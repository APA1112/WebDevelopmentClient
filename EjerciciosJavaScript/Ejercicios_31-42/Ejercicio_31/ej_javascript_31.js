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
  "granada"
];

const main = function () {
  createButtons();
  showWord();
};

const createButtons = function () {
  var buttons = document.getElementById("botones");
  var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  for (var i = 0; i < alphabet.length; i++) {
    var letter = alphabet[i];
    var button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", function(){
      wordHistorical(this.textContent);
    });
    // Añadimos el botón al div
    buttons.appendChild(button);
  }
};

const chooseWord = function(a){
    var randomNum = Math.floor(Math.random()*a);
    return words[randomNum];
}

const showWord = function(){
  var word = document.getElementById("word");
  var choosenWord = chooseWord(words.length);
  word.textContent = choosenWord; 
}

const wordHistorical = function(a){
  var historical = document.getElementById("letras");
  historical.textContent += a+" ";
}
window.addEventListener("DOMContentLoaded", main);
