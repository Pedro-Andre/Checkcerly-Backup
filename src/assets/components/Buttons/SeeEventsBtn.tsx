import { Link } from "react-router-dom";
import "./Buttons.css";

function SeeEventsBtn() {
  return (
    <button className="btn btn-2">
      <Link to={"/perfil"}>Ver meus eventos</Link>
    </button>
  );
}

export default SeeEventsBtn;
