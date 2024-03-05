import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Articulo from "./components/Articulo";

function App() {
  return (
    <>
      <header>
        <h1>Prueba Diweb</h1>
        <Menu
          elemento1='Inicio'
          elemento2='Nosotros'
          elemento3='Contacta'
          elemento4='Proyectos'
          elemento5='Clientes'
        />
      </header>
      <main>
        <section>
          <article>
            <Articulo
              imagen="1"
              titulo="Paraje Natural"
              nombre="Sierra de Aracena"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              deleniti rerum culpa ut a optio ratione accusamus quisquam aspernatur
              totam magnam distinctio, ab facere vitae quia blanditiis, cum autem
              maxime."
            />
            <Articulo
              titulo="Paraje Natural"
              nombre="Sierra Nevada"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              deleniti rerum culpa ut a optio ratione accusamus quisquam aspernatur
              totam magnam distinctio, ab facere vitae quia blanditiis, cum autem
              maxime."
            />
          </article>
          <article>Nuestros Bosques</article>
          <article>
            <Galeria />
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
