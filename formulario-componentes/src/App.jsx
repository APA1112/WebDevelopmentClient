import ComponenteId from "./components/Componente-id";
import ComponenteTexto from "./components/Componente-texto";
import "./App.css";

function App() {
  return (
    <>
      <form action="">
        <ComponenteId value={1} />
        <ComponenteTexto id="name-id" type="name" />
        <ComponenteTexto id="username-id" type="userne" />
        <ComponenteTexto id="email-id" type="email" />
        <ComponenteTexto id="address-id" type="address" />
        <ComponenteTexto id="phone-id" type="phone" />
      </form>
    </>
  );
}

export default App;
