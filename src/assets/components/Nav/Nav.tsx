import "./Nav.css";
import LoginBtn from "../Buttons/LoginBtn";
// import ThemeBtn from "../Buttons/ThemeBtn";
import Logo from "../imgs/Logo";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <Logo />
          <div className="navlinks">
            <Link to={"/home"}>Home</Link>
            <Link to={"/criar-evento"}>Criar Evento</Link>
            <Link to={"/historico-eventos"}>Histórico de Eventos</Link>
          </div>
          <div className="nav-btns">
            <Link to={"/registro"}>
              <LoginBtn />
            </Link>
            {/* <ThemeBtn/ > */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
