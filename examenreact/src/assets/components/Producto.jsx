function Producto(props) {
  return (
    <div className="item">
      <a href="#" className="item-content-wrapper">
        <div className="item-image-wrapper">
          <div className="heart js-heart">
            <i className="fa fa-heart-o js-heart-icon" aria-hidden="true"></i>
          </div>
          <img src={props.src} loading="lazy" alt={props.title} />
        </div>

        <div className="item-description-wrapper">
          <div className="item-name">{props.title}</div>
          <div className="item-price">{props.price}€</div>
        </div>
      </a>
    </div>
  );
}

export default Producto;
