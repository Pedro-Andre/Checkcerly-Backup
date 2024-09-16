import OuvintePage from "../assets/components/OuvintePage/OuvintePage";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";

function RegistroOuvinte() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main">
        <OuvintePage />
      </section>
    </>
  );
}

export default RegistroOuvinte;
