function irWeb(){
    var lista = document.querySelector('select [name = "paginas"]');
    var seleccion = lista.selectedIndex;
    if (seleccion) {
        var url = seleccion.value;
        window.open(url, '_blank');
    }
}