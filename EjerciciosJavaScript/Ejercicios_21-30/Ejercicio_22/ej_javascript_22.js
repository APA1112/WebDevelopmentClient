function main() {
  var elemento = document.getElementById("miDiv");
  console.log(elemento);

  //Añadimos un EventListener para cuando el raton este sobre el div cambie
  elemento.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "yellow";
  });

  //EventListener que devuelve el div a su estado original
  elemento.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
  });
}

window.addEventListener("DOMContentLoaded", main);
