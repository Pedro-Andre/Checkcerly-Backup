import "./Nav.css";
import LoginBtn from "../Buttons/LoginBtn";
import ThemeBtn from "../Buttons/ThemeBtn";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo"></div>
      {/* <Logo></Logo> */}

      <div className="navlinks">
        <Link to={"/home"}>Home</Link>
        <Link to={"/criar-evento"}>Criar Evento</Link>
        <Link to={"/historico-eventos"}>Histórico de Eventos</Link>
      </div>

      <div className="nav-btns">
        <Link to={"/registro"}>
          <LoginBtn></LoginBtn>
        </Link>
        <ThemeBtn></ThemeBtn>
      </div>
    </nav>
  );
}

export default Nav;
