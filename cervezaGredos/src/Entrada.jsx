import styles from "./Entrada.module.css";

export function Entrada(props) {
  return (
    <div className={styles.contenedor}>
      <img className={styles.imagen} src={props.foto} alt={props.alt} />
      <p className={styles.texto}>{props.texto}</p>
    </div>
  );
}

//Otra forma de pasarle los parámetros al componente, en la que solo pasamos
//las variables necesarias para el componente
/*
export function Entrada({foto, alt, texto}) {
  return (
    <div className={styles.contenedor}>
      <img className={styles.imagen} src={foto} alt={alt} />
      <p className={styles.texto}>{texto}</p>
    </div>
  );
}
 */
