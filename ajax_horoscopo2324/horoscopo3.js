document.addEventListener("DOMContentLoaded", main);

function main() {
  const nodosBotones = document.querySelectorAll("asside button");

  nodosBotones.forEach((ele, ind)=>ele.id=ind); //Añadimos id a los botones
  nodosBotones.forEach((ele, ind) => {
    console.log(ele, ind);
    ele.addEventListener("click", function () {
      buscarInf(ele, ind);
    });
  }); //Añadimos el eventListener a los botones
}

function buscarInf(e) {
  console.log(e.target.textContent, e.target.id);

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", `http://localhost/cliente/db_ajax.php?numero=${e.target.id}`);
  oReq.send();
}

function reqListener() {
  let datos = JSON.parse(this.responseText);
  console.log(datos);
  nodoInsertar = document.getElementById("idtexto");
  nodoInsertar.innerHTML="";
  for (const property in datos){
    nodoInsertar.innerHTML+=(`${property}: ${datos[property]}`);
  }
}
