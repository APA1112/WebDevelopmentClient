function Menu(props) {
  return (
    <>
      <div>
        <p>Menú</p>
        <input type="checkbox" id="check" />
        <label id="menu" for="check">
          <span id="abrir">&#9776;</span>
          <span id="cerrar">&#215;</span>
        </label>
        <nav id="nav">
          <ul>
            <li>{props.elemento1}</li>
            <li>{props.elemento2}</li>
            <li>{props.elemento3}</li>
            <li>{props.elemento4}</li>
            <li>{props.elemento5}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
