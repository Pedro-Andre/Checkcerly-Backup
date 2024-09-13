import { Link } from "react-router-dom";
import "./Buttons.css";

function LoginBtn2() {
  return (
    <button className="btn btn-2">
      <Link to={"/login"}>Ja tenho uma conta</Link>
    </button>
  );
}

export default LoginBtn2;
