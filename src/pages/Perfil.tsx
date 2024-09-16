import Nav from "../assets/components/Nav/Nav";
import PerfilPage from "../assets/components/PerfilPage/PerfilPage";
import EventList from "../assets/components/EventsList/EventList";

function Perfil() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main">
        <PerfilPage />
        <EventList />
      </section>
    </>
  );
}

export default Perfil;
