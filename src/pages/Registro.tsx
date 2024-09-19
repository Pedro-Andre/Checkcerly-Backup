import LoginBtn2 from "../assets/components/Buttons/LoginBtn2";
import Footer from "../assets/components/Footer/Footer";
import Nav from "../assets/components/Nav/Nav";
import RegistroPage from "../assets/components/RegistroPage/RegistroPage";

function Registro() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section className="registro-section">
          <RegistroPage />
          <LoginBtn2 />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Registro;
