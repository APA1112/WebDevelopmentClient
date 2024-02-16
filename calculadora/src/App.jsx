import Boton from "./componentes/Boton";
import "./App.css";

function App() {
  return (
    <>
      <div className="Calculadora">
        <table>
          <tr>
            <td>
              <Boton value="7" contenido="7"></Boton>
            </td>
            <td>
              <Boton value="8" contenido="8"></Boton>
            </td>
            <td>
              <Boton value="9" contenido="9"></Boton>
            </td>
          </tr>
          <tr>
            <td>
              <Boton value="4" contenido="4"></Boton>
            </td>
            <td>
              <Boton value="5" contenido="5"></Boton>
            </td>
            <td>
              <Boton value="6" contenido="6"></Boton>
            </td>
          </tr>
          <tr>
            <td>
              <Boton value="1" contenido="1"></Boton>
            </td>
            <td>
              <Boton value="2" contenido="2"></Boton>
            </td>
            <td>
              <Boton value="3" contenido="3"></Boton>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
