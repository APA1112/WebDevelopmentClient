import "./App.css";
import { Entrada } from "./Entrada";
import imagen1 from "./img/foto1.jpg";
import imagen2 from "./img/foto2.jpg";
import imagen3 from "./img/foto3.jpg";

function App() {
  return (
    <main>
      <header className="titulo">
        <h2>La Primera Cerveza Artesanal y Natural de la Sierra de Gredos</h2>
      </header>
      <div className="entradas">
        <Entrada
          foto={imagen1}
          texto="Ahora puedes disfrutar de todo el sabor y propiedades de la mejor Cerveza Artesanal comprando desde tu Casa"
          alt="Tienda Online"
        ></Entrada>
        <Entrada
          foto={imagen2}
          texto="Descubre Nuestra Cerveza, elaborada con la mejor malta y lupulos cuidadosamente seleccionados."
          alt="Nuestra Cerveza"
        ></Entrada>
        <Entrada
          foto={imagen3}
          texto="En nuestra fábrica elaboramos la cerveza artesana Gredos, siguiendo el método tradicional artesano de nuestros abuelos."
          alt="Nuestra Fabrica"
        ></Entrada>
      </div>
    </main>
  );
}

export default App;
