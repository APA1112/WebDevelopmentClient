function main(){
  var boton = document.getElementById('open');
  boton.addEventListener("click", irWeb);
}

function irWeb() {
  var lista = document.getElementById('webs');
    console.log(lista.value);
    window.open(lista.value, "_blank");
  }

window.addEventListener("DOMContentLoaded", main);