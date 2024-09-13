import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">Login</p>
        <svg
          width="100%"
          height="40rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="40rem"
            x="-0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_227_259"
              x1="1.61353"
              y1="1.00342"
              x2="1297.61"
              y2="416.915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009D53" />
              <stop offset="1" stopColor="#F07F3D" />
            </linearGradient>
          </defs>
        </svg>
        <form action="">
          <div className="inputs">
            <label htmlFor="">
              Email
              <input type="email" name="mail" />
            </label>
            <label htmlFor="">
              Senha
              <input type="password" name="senha" />
            </label>
          </div>
        </form>
        <Link to={"/nova-senha"} className="nova-senha">
          Esqueceu a senha? Clique aqui para redefinir
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
