const fechaVacaciones = new Date("2023-12-19");

function actualizarContador() {
    const fecha = new Date();
    const restaFechas = Math.floor((fechaVacaciones - fecha)/(1000*60*60*24));
    console.log(restaFechas);

    if(restaFechas>=0){
        var decenas = Math.floor(restaFechas/10);
        var unidades = restaFechas%10;

        document.getElementById("decenas").src = "imagenes/num"+decenas+".png";
        document.getElementById("unidades").src = "imagenes/num"+unidades+".png";
    }
}

setInterval(actualizarContador, 1000);
