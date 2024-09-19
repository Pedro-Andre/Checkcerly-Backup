import "./Perfil.css";

function PerfilPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">
          Bem vindo, <span>User (ouvinte-teste)</span>
        </p>
        <svg
          width="100%"
          height="25rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="25rem"
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
        <div className="user-texts">
          <div className="user-name">
            <span>Nome</span>
            <p>Fulaninho de Tal</p>
          </div>
          <div className="user-email">
            <span>Email</span>
            <p>Email@fulaninho.detal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilPage;
