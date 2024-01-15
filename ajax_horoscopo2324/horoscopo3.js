document.addEventListener("DOMContentLoaded", main);

function main() {
  const nodosBotones = document.querySelectorAll("aside button");

  nodosBotones.forEach((ele, ind) => (ele.id = ind)); //Añadimos id a los botones
  nodosBotones.forEach((ele, ind) => {
    console.log(ele, ind);
    ele.addEventListener("click", function () {
      buscarInf(ele, ind);
    });
  }); //Añadimos el eventListener a los botones
}

function buscarInf(e) {
  console.log(e, e.id);
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", `http://localhost/cliente/bd_ajax.php?numero=${e.id}`);
  oReq.send();
}

function reqListener() {
  let datos = JSON.parse(this.responseText);
  console.log(datos);
  nodoInsertar = document.getElementById("idtexto");
  nodoInsertar.innerHTML = "";
  for (const property in datos) {
    nodoInsertar.innerHTML += `${property}: ${datos[property]}`;
  }
  cambiarImagen(datos.nombre);
  cambiarTitulo(datos.nombre);
}

function cambiarImagen(nombreImagen){
  const nodoImagen = document.querySelectorAll("figure img");
  let nombreSinTildes = quitarTildes(nombreImagen);
  nodoImagen[0].src = `imagenes/${nombreSinTildes}.jpg`;
  const nodoPieImagen = document.getElementById("figuno");
  nodoPieImagen.innerHTML = `${nombreImagen}`;
}

function cambiarTitulo(nombre){
  const nodoTitulo = document.getElementById("idcab");
  nodoTitulo.innerHTML = "";
  nodoTitulo.innerHTML = `Signo ${nombre}`;
}

function quitarTildes(cadena){
    // Reemplazar letras con tilde por letras sin tilde
    var resultado = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  return resultado;
}