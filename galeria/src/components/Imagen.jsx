function Imagen(props){
    return(
        <div>
            <img src={props.src} alt={props.alt} />
            <p className={props.agua=='yes'?'agua':'no_agua'}>{props.pie}</p>
        </div>
    )
}

export default Imagen