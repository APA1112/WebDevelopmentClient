import Imagen1 from "../img/foto6.jpg";
import Imagen2 from "../img/foto7.jpg";
import Imagen3 from "../img/foto8.jpg";
import Imagen4 from "../img/foto11.jpg";

function Galeria() {
  return (
    <>
      <p>Nuestra Galeria de Fotos</p>
      <h2>Paisajes Made in Spain</h2>
      <div class="galeria">
        <img src={Imagen1} alt="" />
        <img src={Imagen2} alt="" />
        <img src={Imagen3} alt="" />
        <img src={Imagen4} alt="" />
      </div>
    </>
  );
}

export default Galeria;
