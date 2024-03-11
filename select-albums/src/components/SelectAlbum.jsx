import { useState, useEffect } from "react"
import styles from './SelectAlbum.module.css'

const url = `https://jsonplaceholder.typicode.com/albums`;


function SelectAlbums(){
    const [options, setOptions] = useState(null);

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
        const id = e.target.index + 1;
        console.log(id)
        return id;
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