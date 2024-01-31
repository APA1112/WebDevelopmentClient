export function Comentario(props) {
  return (
    <div class="comentario">
      <img src="./src/img/foto1.png" alt="foto" />
      <div className="comentario_contenedor">
        <p class="comentario_parrafo">{props.nombre}</p>
        <p class="comentario_parrafo">{props.trabajo}</p>
        <p class="comentario_texto">{props.comentarios}</p>
      </div>
    </div>
  )
}
