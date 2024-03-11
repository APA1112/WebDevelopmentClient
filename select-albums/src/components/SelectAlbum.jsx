import { useState, useEffect, useContext } from "react"
import styles from './SelectAlbum.module.css'
import { IndiceContext } from "./IndiceProvider";

const url = `https://jsonplaceholder.typicode.com/albums`;

function SelectAlbums(){
    const [options, setOptions] = useState(null);
    const {setIndice} = useContext(IndiceContext)

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((datos) => {
            setOptions(datos);
        });
      }, []);
      
      if(!options){
        return <div>Cargando...</div>
      }

      function leerId(e){
        const id = parseInt(e.target.index + 1);
        setIndice(id);
      }

      return(
        <>
            <select className={styles.select}>
                {options.map((option)=><option key={option.id} onClick={leerId}>{option.title}</option>)}
            </select>
        </>
      );
}

export default SelectAlbums