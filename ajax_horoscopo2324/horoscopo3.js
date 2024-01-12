function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost/cliente/bd_ajax.php?");
oReq.send();

document.addEventListener("DOMContentLoaded", main);

function main() {
  const nodosBotones = document.querySelectorAll("asside button");

  nodosBotones.forEach((ele, ind)=>{
    console.log(ele, ind);
    ele.addEventListener("click", function(){
        buscarInfo(ele, ind);
    });
  });
}

function buscarInfo(e, i) {
  console.log(e, i);
}
