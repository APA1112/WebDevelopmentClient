import "./App.css";
import Imagen from "./components/Imagen";
import Imagen1 from "./img/1.jpg"
import Imagen2 from "./img/2.jpg"
import Imagen3 from "./img/3.jpg"
import Imagen4 from "./img/4.jpg"
import Imagen5 from "./img/5.jpg"
import Imagen6 from "./img/6.jpg"

function App() {
  return (
    <>
      <div className="container">
        <Imagen src={Imagen1} alt="foto 1" pie="Foto 1" agua="yes"/>
        <Imagen src={Imagen2} alt="foto 2" pie="Foto 2" agua="no"/>
        <Imagen src={Imagen3} alt="foto 3" pie="Foto 3" agua="no"/>
        <Imagen src={Imagen4} alt="foto 4" pie="Foto 4" agua="yes"/>
        <Imagen src={Imagen5} alt="foto 5" pie="Foto 5" agua="yes"/>
        <Imagen src={Imagen6} alt="foto 6" pie="Foto 6" agua="yes"/>
      </div>
    </>
  );
}

export default App;
