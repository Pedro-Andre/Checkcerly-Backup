import "./Buttons.css";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <button className="btn">
      <Link to={"/registro"}>Entrar</Link>
    </button>
  );
}

export default LoginBtn;
