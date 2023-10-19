const frases = [
  "Frase 1",
  "Frase 2",
  "Frase 3",
  "Frase 4",
  "Frase 5",
  "Frase 6",
  "Frase 7",
  "Frase 8",
  "Frase 9",
  "Frase 10"
];
const fotos = [
  "IMAGEN_1.jpeg",
  "IMAGEN_2.jpg",
  "IMAGEN_3.jpg",
  "IMAGEN_4.png",
  "IMAGEN_5.jpg"
];
function cambiarFrases() {
  var p = document.getElementsByTagName("p");
  var frasesMostrar = [];
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 9); //Generamos un numero aleatorio del 0 al 9
    if (frasesMostrar.includes(frases[x])) {
      x = Math.floor(Math.random() * 9);
      frasesMostrar.push(frases[x]);
    } else {
      frasesMostrar.push(frases[x]);
    }
  }
  for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = frasesMostrar[i];
  }
  console.log(frasesMostrar);
}
setInterval(cambiarFrases(), 5000);

function cambiarFotos() {
  var img = document.getElementsByTagName("img");
  for (let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * 4);
    img[i].src = fotos[x];
  }
}
setInterval(cambiarFotos(), 10000);
