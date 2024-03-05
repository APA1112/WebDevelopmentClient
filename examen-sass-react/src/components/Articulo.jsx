import Imagen1 from '../img/foto2.jpg'
import Imagen2 from '../img/foto10.jpg'

function Articulo(props) {
  return (
    <>
      <div class="sierras">
        <img src={props.imagen==1?Imagen1:Imagen2} alt="" />
        <p class="parajes">{props.titulo}</p>
        <h3>{props.nombre}</h3>
        <p class="info">{props.info}</p>
      </div>
    </>
  );
}

export default Articulo;
