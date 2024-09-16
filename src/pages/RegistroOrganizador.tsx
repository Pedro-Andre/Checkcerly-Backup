import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";
import OrganizadorPage from "../assets/components/OrganizadorPage/OrganizadorPage";

function RegistroOrganizador() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main">
        <OrganizadorPage />
      </section>
    </>
  );
}

export default RegistroOrganizador;
