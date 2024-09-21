import "./Nav.css";
import LoginBtn from "../Buttons/LoginBtn";
// import ThemeBtn from "../Buttons/ThemeBtn";
import Logo from "../imgs/Logo";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  // nav mobile function
  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMobile = document.querySelector(".nav-mobile");

    const toggleNav = () => navMobile?.classList.toggle("show-nav");

    menuIcon?.addEventListener("click", toggleNav);

    return () => menuIcon?.removeEventListener("click", toggleNav);
  }, []);

  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <Logo />
          <div className="navlinks">
            <Link to={"/home"}>Home</Link>
            <Link to={"/criar-evento"}>Criar Evento</Link>
            <Link to={"/lista-participantes"}>Lista de Participantes</Link>
          </div>
          <div className="nav-btns">
            <Link to={"/registro"}>
              <LoginBtn />
            </Link>
            {/* <ThemeBtn/ > */}
          </div>
        </nav>
      </div>
      {/* NAV MOBILE */}
      <div className="nav-mobile-container">
        <Logo />
        <div className="menu-icon"></div>
        <nav className="nav-mobile">
          <div className="navlinks">
            <Link to={"/home"}>Home</Link>
            <Link to={"/criar-evento"}>Criar Evento</Link>
            <Link to={"/lista-participantes"}>Lista de Participantes</Link>
          </div>
          <Link to={"/registro"}>
            <LoginBtn />
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
