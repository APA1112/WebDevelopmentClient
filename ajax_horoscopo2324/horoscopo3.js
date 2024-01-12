function reqListener(){
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost/cliente/bd_ajax.php?numero=1");
oReq.send();