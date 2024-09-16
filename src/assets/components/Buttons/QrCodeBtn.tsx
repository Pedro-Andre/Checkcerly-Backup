import "./Buttons.css";
import { Link } from "react-router-dom";

function QrdCodeBtn() {
  return (
    <button className="btn btn-2">
      <Link to={"/evento-criado/qr-code"}>Criar QR-Code</Link>
    </button>
  );
}

export default QrdCodeBtn;
