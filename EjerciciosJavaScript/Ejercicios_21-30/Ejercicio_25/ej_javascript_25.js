function irWeb(){
    var lista = document.querySelector('select');
    var seleccion = lista.selectedIndex;
    if (seleccion) {
        window.open(seleccion.value);
    }
}