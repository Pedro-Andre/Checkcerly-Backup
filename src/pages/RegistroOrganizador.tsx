import CreateAcc from "../assets/components/Buttons/CreateAcc";
import Nav from "../assets/components/Nav/Nav";
import "../assets/components/PagesCss/Registro.css";

function RegistroOrganizador() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>

      <section className="main">
        <div className="container">
          <p className="container-title">
            Registrando-se como: <span>Organizador de Eventos</span>
          </p>
          <svg
            width="100%"
            height="80rem"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-container"
          >
            <rect
              rx="20"
              width="100%"
              height="80rem"
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
                Nome
                <input type="text" name="nome" />
              </label>
              <label htmlFor="">
                Email
                <input type="text" name="nome" />
              </label>
              <label htmlFor="">
                Senha
                <input type="password" name="senha" />
              </label>
              <label htmlFor="">
                Confirmar Senha
                <input type="password" name="check-senha" />
              </label>
              <label htmlFor="">
                Nº de Celular
                <input type="password" name="senha" />
              </label>
            </div>
          </form>
        </div>
        <CreateAcc />
      </section>
    </>
  );
}

export default RegistroOrganizador;
