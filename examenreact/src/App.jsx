import Categoria from "./assets/components/Categoria";
import "./App.css";
import { useState, useEffect, useContext } from "react";
import Producto from "./assets/components/Producto";
import {
  CategoriaContext,
  CategoriaProvider,
} from "./assets/components/CategoriaContext";

function App() {
  const [categorias, setCategorias] = useState([]);
  const { categoriasBuscar } = useContext(CategoriaContext);
  const [productosMostrar, setProductosMostrar] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
        const categoriasFiltrar = categoriasBuscar.length === 0 ? [data[0]] : categoriasBuscar;
  
        const promesasProductos = categoriasFiltrar.map((categoria) =>
          fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then((response) => response.json())
        );
  
        Promise.all(promesasProductos)
          .then((productosPorCategoria) => {
            // Combinar todos los productos de las categorías en una lista
            const todosProductos = productosPorCategoria.reduce((acumulador, productos) => acumulador.concat(productos), []);
            // Filtrar los productos para evitar duplicados
            const nuevosProductos = todosProductos.filter((producto, index, array) => array.findIndex(p => p.id === producto.id) === index);
            // Actualizar el estado de productosMostrar
            setProductosMostrar(nuevosProductos);
            console.log(nuevosProductos);
          });
      });
  }, [categoriasBuscar]);
  

  return (
    <>
      <main className="main-wrapper">
        <header className="page-header">
          <h1 className="page-title">Tienda de Prueba Ajax</h1>
        </header>

        <div className="page-wrapper">
          <aside className="aside-wrapper">
            <div className="aside-section">
              <h3 className="section-title">Filtros</h3>
              <div className="section-content">
                {categorias.map((categoria) => (
                  <Categoria key={categoria} categoria={categoria} />
                ))}
              </div>
            </div>
          </aside>
          <div className="content-wrapper">
            <h3 className="section-title">Artículos</h3>
            <div className="grid-container" id="grid-container">
              {productosMostrar.map((producto) => (
                <Producto
                  src={producto.image}
                  title={producto.title}
                  price={producto.price}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default () => (
  <CategoriaProvider>
    <App />
  </CategoriaProvider>
);
