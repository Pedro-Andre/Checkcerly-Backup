import { Link } from "react-router-dom";
import "./Buttons.css";

function EventQrCodeBtn() {
  return (
    <>
      <Link to={"/participantes"} className="participantes-btn">
        Qr-code
      </Link>
    </>
  );
}

export default EventQrCodeBtn;
