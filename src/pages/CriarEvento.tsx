import Nav from "../assets/components/Nav/Nav";
import OrganizadorEvento from "../assets/components/OrganizadorEvento/OrganizadorEvento";
import EventoContainer from "../assets/components/EventoContainer/EventoContainer";
import CreateEventBtn from "../assets/components/Buttons/CreateEventBtn";

function CriarEvento() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <main>
        <section className="event-section">
          <OrganizadorEvento></OrganizadorEvento>
          <EventoContainer></EventoContainer>
          <CreateEventBtn></CreateEventBtn>
        </section>
      </main>
    </>
  );
}

export default CriarEvento;
