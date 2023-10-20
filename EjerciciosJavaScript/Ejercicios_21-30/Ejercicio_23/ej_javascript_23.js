function main(){
    var boton = document.getElementById("open");
    boton.addEventListener("click", irWeb);
}
function irWeb(){
    var opciones = document.getElementsByName("web");
    var link = null;

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            link = opciones[i].value;
            break;
        }
    }
    if (link) {
        window.location.href = link;
    } else {
        alert("Por favor, selecciona una página web.");
    }
}

window.addEventListener("DOMContentLoaded", main);