import React from "react";
import "../estilos/Boton.css";

function leerValue(e){
    console.log (e.target.value);
}

function Boton(props) {
    return (
    <button value={props.value} onClick={leerValue}>{props.contenido}</button>
    );
}

export default Boton;
