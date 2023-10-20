function main() {
  var elemento = document.getElementById("miDiv");

  //EventListener para cuando el raton este sobre el div cambie
  elemento.addEventListener("mouseover", function () {
    elemento.style.backgroundColor = "blue";
    elemento.style.color = "yellow";
  });

  //EventListener que devuelve el div a su estado original
  elemento.addEventListener("mouseout", function () {
    elemento.style.backgroundColor = "";
    elemento.style.color = "";
  });
}

window.addEventListener("DOMContentLoaded", main);
