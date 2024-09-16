import LoginBtn2 from "../assets/components/Buttons/LoginBtn2";
import Nav from "../assets/components/Nav/Nav";
import RegistroPage from "../assets/components/RegistroPage/RegistroPage";

function Registro() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <section className="main">
        <RegistroPage />
        <LoginBtn2 />
      </section>
    </>
  );
}

export default Registro;
