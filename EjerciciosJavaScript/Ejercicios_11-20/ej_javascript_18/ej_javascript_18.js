const botones = Array.from(document.getElementsByTagName("button")); //Devuelve un HTMLCollection con todos los botones, que hay que hacer un array
var areaTexto = document.getElementById("texto");
var operacion = 0;
var numero1;
var numero2;
botones.forEach((boton) => {
  boton.addEventListener("click", function valor() {
    const valorBoton = boton.value;
    areaTexto.value += valorBoton;
    console.log(valorBoton);
    switch (valorBoton) {
      case "/":
        operacion = 1;
        numero1 = areaTexto.value;
        numero1 = parseInt(numero1.slice(0, -1));
        areaTexto.value = "";
        break;
      case "+":
        operacion = 2;
        numero1 = areaTexto.value;
        numero1 = parseInt(numero1.slice(0, -1));
        areaTexto.value = "";
        break;
      case "-":
        operacion = 3;
        numero1 = areaTexto.value;
        numero1 = parseInt(numero1.slice(0, -1));
        areaTexto.value = "";
        break;
      case "x":
        operacion = 4;
        numero1 = areaTexto.value;
        numero1 = parseInt(numero1.slice(0, -1));
        areaTexto.value = "";
        break;
      case "=":
        numero2 = areaTexto.value;
        numero2 = parseInt(numero2.slice(0, -1));
        switch (operacion) {
          case 1:
            var resultado = numero1 / numero2;
            console.log(resultado);
            areaTexto.value = resultado;
            break;
          case 2:
            var resultado = numero1 + numero2;
            console.log(resultado);
            areaTexto.value = resultado;
            break;
          case 3:
            var resultado = numero1 - numero2;
            console.log(resultado);
            areaTexto.value = resultado;
            break;
          case 4:
            var resultado = numero1 * numero2;
            console.log(resultado);
            areaTexto.value = resultado;
            break;
        }
        break;
    }
  });
});
