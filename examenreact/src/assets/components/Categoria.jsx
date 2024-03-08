import { useContext, useState } from "react";
import { CategoriaContext } from "./CategoriaContext";

function Categoria({categoria}) {

  const [claseIcono, setClaseIcono] = useState("fa fa-close delete-filter js-delete-filter")
  const {categoriasBuscar, setCategoriasBuscar} = useContext(CategoriaContext);

  const handleClick = () => {
    const categoriaIndex = categoriasBuscar.indexOf(categoria);

    if (claseIcono === "fa fa-close delete-filter js-delete-filter") {
      if (categoriaIndex === -1) {
        setCategoriasBuscar([...categoriasBuscar, categoria]);
        console.log(categoriasBuscar);
      }
      setClaseIcono("fa fa-check delete-filter js-delete-filter");
    } else {
      if (categoriaIndex !== -1) {
        setCategoriasBuscar(categoriasBuscar.filter(cat => cat !== categoria));
        console.log(categoriasBuscar);
      }
      setClaseIcono("fa fa-close delete-filter js-delete-filter");
    }
  }

  return (
    <div className="section-content">
      <div className="item">
        <span className="item-content">{categoria}</span>
        <i className={claseIcono} onClick={handleClick}></i>
      </div>
    </div>
  );
}

export default Categoria;
