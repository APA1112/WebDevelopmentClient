import styles from "./Entrada.module.css";

export function Entrada(props) {
  return (
    <div className={styles.contenedor}>
      <img className={styles.imagen} src={props.foto} alt={props.alt} />
      <p className={styles.texto}>{props.texto}</p>
    </div>
  );
}
