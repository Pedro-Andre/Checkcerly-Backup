import "./OrganizadorEvento.css";

function OrganizadorEvento() {
  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Organizador do Evento</p>
        <svg
          width="100%"
          height="50rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="50rem"
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
        <form action="" id="org-form">
          <div className="inputs">
            <label htmlFor="">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="org-name"
                placeholder="Seu nome"
              />
            </label>
            <label htmlFor="">
              Disciplina
              <input
                required
                type="text"
                name="disciplina"
                id="org-disc"
                placeholder="Sua disciplina"
              />
            </label>
            <label htmlFor="">
              Email
              <input
                required
                type="email"
                name="mail"
                id="org-email"
                placeholder="Seu email"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrganizadorEvento;
