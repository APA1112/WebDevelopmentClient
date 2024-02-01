import styles from "./Comentario.module.css";

export function Comentario(props) {
  return (
    <div className={styles.comentario}>
      <img className={styles.imagen} src="./src/img/foto1.png" alt="foto" />
      <div className={styles.comentario_contenedor}>
        <p className={styles.comentario_contenedor}>{props.nombre}</p>
        <p className={styles.comentario_contenedor}>{props.trabajo}</p>
        <p className={styles.comentario_contenedor}>{props.comentarios}</p>
      </div>
    </div>
  )
}
