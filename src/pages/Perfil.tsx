import Nav from "../assets/components/Nav/Nav";
import PerfilPage from "../assets/components/PerfilPage/PerfilPage";
import EventList from "../assets/components/EventsList/EventList";
import Footer from "../assets/components/Footer/Footer";

function Perfil() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="main-2">
        <section className="list-container">
          <PerfilPage />
          <EventList />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Perfil;
