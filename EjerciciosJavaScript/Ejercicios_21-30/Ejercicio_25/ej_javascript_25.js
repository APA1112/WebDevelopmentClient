function irWeb(){
    var opciones = document.getElementsByName("web");

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            window.open(opciones[i].value, "_blank");
        }
    }
}