import { useState } from "react";
import "./App.css";

function App() {
  const [dolar, setDolar] = useState(1.08);
  const [yen, setYen] = useState(160.43);
  const [franco, setFranco] = useState(0.98);
  const [numero, setNumero] = useState(1);

  function convertirDolar(numero) {
    setDolar(numero * 1.08);
  }
  function convertirYen(numero) {
    setYen(numero * 160.43);
  }
  function convertirFranco(numero) {
    setFranco(numero * 0.98);
  }

  function convertir(numero) {
    convertirDolar(numero);
    convertirYen(numero);
    convertirFranco(numero);
  }

  function conseguirNumero(e){
    setNumero(e.target.value);
  }
  return (
    <>
      <h1>Conversor de moneda</h1>
      <div className="card">
        <label htmlFor="euro">
          <input id="euro" type="text" name="euro" placeholder="0"  value={numero} onChange={conseguirNumero}/> €
        </label>
        <label htmlFor="dolar">
          <input type="text" name="dolar" readOnly value={dolar} /> $
        </label>
        <label htmlFor="yen">
          <input type="text" name="yen" readOnly value={yen} /> ¥
        </label>
        <label htmlFor="franco">
          <input type="text" name="franco" readOnly value={franco} /> FS
        </label>
        <button onClick={() => convertir(numero)}>Convertir</button>
      </div>
    </>
  );
}

export default App;
