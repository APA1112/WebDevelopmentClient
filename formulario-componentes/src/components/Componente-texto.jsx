function ComponenteTexto(props){
    return(
        <label htmlFor={props.id}>
            <input type={props.type} id={props.id} readOnly/>
        </label>
    );
}

export default ComponenteTexto;