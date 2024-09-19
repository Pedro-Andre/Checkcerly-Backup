import Nav from "../assets/components/Nav/Nav";
import PerfilPage from "../assets/components/PerfilPage/PerfilPage";
import EventList from "../assets/components/EventsList/EventList";
import "../App.css";

function Perfil() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main list-container">
        <PerfilPage />
        <EventList />
      </section>
    </>
  );
}

export default Perfil;
