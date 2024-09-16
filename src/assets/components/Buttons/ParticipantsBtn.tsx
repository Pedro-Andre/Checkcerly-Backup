import { Link } from "react-router-dom";
import "./Buttons.css";

function ParticipantsBtn() {
  return (
    <>
      <Link to={"/participantes"} className="participantes-btn">
        Participantes
      </Link>
    </>
  );
}

export default ParticipantsBtn;
