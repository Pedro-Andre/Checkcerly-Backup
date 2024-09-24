import CreateAcc from "../Buttons/CreateAccBtn";

function OrganizadorPage() {
  return (
    <>
      <div className="container org-container">
        <p className="container-title">
          Registrando-se como: <span>Organizador de Eventos</span>
        </p>
        <svg
          width="100%"
          height="65rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="65rem"
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
        <form action="" id="org-login-form">
          <div className="inputs">
            <label htmlFor="org-login-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="org-login-name"
                placeholder="Seu nome"
              />
            </label>
            <label htmlFor="org-login-email">
              Email
              <input
                required
                type="text"
                name="nome"
                id="org-login-email"
                placeholder="Seu email"
              />
            </label>
            <label htmlFor="org-login-senha">
              Senha
              <input
                required
                type="password"
                name="senha"
                id="org-login-senha"
                placeholder="Sua senha"
              />
            </label>
            <label htmlFor="org-login-cel">
              Nº de Celular
              <input
                required
                type="tel"
                name="senha"
                id="org-login-cel"
                placeholder="Seu número de celular"
              />
            </label>
          </div>
        </form>
      </div>
      <CreateAcc />
    </>
  );
}

export default OrganizadorPage;
