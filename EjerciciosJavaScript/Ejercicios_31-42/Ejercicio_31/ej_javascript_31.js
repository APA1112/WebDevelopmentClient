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
  var randomWord = chooseWord(words.length);
  console.log(randomWord);
};

const createButtons = function () {
  var buttons = document.getElementById("botones");
  var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  for (var i = 0; i < alphabet.length; i++) {
    var letter = alphabet[i];
    var button = document.createElement("button");
    button.textContent = letter;
    //Añadimos el id al botón que creamos
    button.setAttribute("id", "btn" + letter);
    // Añadimos el botón al div
    buttons.appendChild(button);
  }
};

const chooseWord = function(a){
    var randomNum = Math.floor(Math.random()*a);
    return words[randomNum];
}

window.addEventListener("DOMContentLoaded", main);
