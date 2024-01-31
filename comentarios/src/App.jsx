import "./App.css";
import { Comentario } from "./Comentario";

function App() {
  return (
    <main>
      <header>
        <h2>Here is what our alumni say about freeCodeCamp</h2>
      </header>
      <Comentario
        nombre="botijo1"
        trabajo="En mi casa los domingos por la mañana"
        comentario="Lorem ipsum"
      ></Comentario>
      <Comentario
        nombre="botijo2"
        trabajo="En mi casa los domingos por la mañana"
        comentario="Lorem ipsum"
      ></Comentario>
      <Comentario
        nombre="botijo3"
        trabajo="En mi casa los domingos por la mañana"
        comentario="Lorem ipsum"
      ></Comentario>
    </main>
  );
}

export default App;
