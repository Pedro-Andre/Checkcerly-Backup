import "./HeroSection.css";
import CreateEventBtn from "../Buttons/CreateEventBtn";
import { Link } from "react-router-dom";
import HeroImg from "../imgs/HeroImg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>
          Planeje e Gerencie seus eventos de forma <span>fácil</span> e{" "}
          <span>simplificada</span>.
        </h3>
        <Link to={"/criar-evento"}>
          <CreateEventBtn />
        </Link>
      </div>
      <div className="hero-img">
        <HeroImg></HeroImg>
      </div>
    </div>
  );
}

export default HeroSection;
