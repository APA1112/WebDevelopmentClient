import { useState, useEffect } from "react";
import styles from "./Galeria.module.css";

function Galeria() {
  const [id, setId] = useState(1);
  const [galeria, setGaleria] = useState();
  const urlFotos = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;

  useEffect(() => {
    fetch(urlFotos)
      .then((response) => response.json())
      .then((datos) => {
        setGaleria(datos);
        console.log(galeria);
      });
  }, []);

  if (!galeria) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={styles.galeria}>
        {galeria.map((foto) => (
          <img key={foto.id} src={foto.thumbnailUrl} alt={foto.title}></img>
        ))}
      </div>
    </>
  );
}

export default Galeria;
