import { useState, useEffect, useContext } from "react";
import styles from "./Galeria.module.css";
import { IndiceContext } from "./IndiceProvider";

function Galeria() {
  const {indice} = useContext(IndiceContext)
  const [galeria, setGaleria] = useState([]);
  

  useEffect(() => {
    const urlFotos = `https://jsonplaceholder.typicode.com/albums/${indice}/photos`;
    fetch(urlFotos)
      .then((response) => response.json())
      .then((datos) => {
        setGaleria(datos);
      });
  }, []);

  if (galeria.length===0) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={styles.galeria}>
        {galeria.slice(0,8).map((foto) => (
          <img key={foto.id} src={foto.thumbnailUrl} alt={foto.title} className={styles.item}></img>
        ))}
      </div>
    </>
  );
}

export default Galeria;
