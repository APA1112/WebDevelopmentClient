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
var letrasCorrectas = [];
var historial = [];
var vidas = 6;
var fallos = 1;
let acertadas = 0;
var alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");

const main = function () {
  var divBotones = document.getElementById("botones");
  divBotones.innerHTML = crearBotones(alphabet);
  choosenWord = chooseWord(words.length, words);
  letrasCorrectas = Array(choosenWord.length).fill("_");
  showWord();
  document
    .getElementById("botones")
    .addEventListener("click", function (event) {
      const botonPulsado = event.target;
      if (botonPulsado.tagName === "BUTTON") {
        let letra = botonPulsado.textContent;
        let resultado = comprobarLetra(choosenWord, letra);
        console.log(resultado);
        showWord();
      }
    });
};

//Funcion con la cual creamos los botones, le pasamos el array con las letras y devuelve un string con los botones
function crearBotones(alphabet) {
  let botonesHTML = "";
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
  if (letrasCorrectas.length === 0) {
    word.textContent = "Pulsa una letra para iniciar";
  } else {
    word.textContent = letrasCorrectas.join(" ");
  }
};
//comprobarLetra comprueba que la letra que pasamos por parametro este en la palabra que pasamos
// por parametro y nos devuelve un array con la letra en la posicion o posiciones en las que
// aparece.
function comprobarLetra(palabra, letra) {
  palabra = palabra.toLowerCase();
  palabra = palabra.split("");
  letra = letra.toLowerCase();
  let letraEncontrada = false;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      letrasCorrectas[i] = letra;
      letraEncontrada = true;
    }
  }

  if (!historial.includes(letra)) {
    historial.push(letra);
  } else {
    alert("Ya has dicho esta letra");
    fallos++;
    vidas--;
  }

  document.getElementById("letras").textContent = historial.join(" ");

  return letrasEncontrada;
}
//Funcion a la que pasamos el resultado de comprobar letra, true o false
function jugar(letraEncontrada) {
  if (!letraEncontrada) {
    console.log("No esta la letra");
    document.getElementById(
      "imagenes"
    ).innerHTML = `<img src="recursosAhorcado/${fallos}.png">`;
    fallos++;
    vidas--;
    console.log(vidas);
    if (vidas === 0) {
      alert("Has perdido");
      reiniciar();
    }
  } else {
    if (palabra.join("") == letrasCorrectas.join("")) {
      alert("Has ganado");
      reiniciar();
    }
  }
}

//Con la funcion reiniciar ponemos al valor de origen a todas las variables
function reiniciar() {
  acertadas = 0;
  historial = [];
  choosenWord = chooseWord(words.length, words);
  letrasCorrectas = Array(choosenWord.length).fill("_");
  document.getElementById("letras").textContent = " ";
  vidas = 6;
  document.getElementById("imagenes").innerHTML = "";
  fallos = 1;
}
window.addEventListener("DOMContentLoaded", main);
