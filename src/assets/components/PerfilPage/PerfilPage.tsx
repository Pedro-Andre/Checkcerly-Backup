import "./Perfil.css";

function PerfilPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">
          Bem vindo, <span>User</span>
        </p>
        <svg
          width="100%"
          height="45rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="45rem"
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
        <div className="user-info">
          <div className="user-texts">
            <div className="user-name">
              <p>Nome</p>
              <span>Fulaninho de Tal</span>
            </div>
            <div className="user-email">
              <p>Email</p>
              <span>Email Fulaninho de tal</span>
            </div>
          </div>
          <div className="user-img"></div>
        </div>
      </div>
    </>
  );
}

export default PerfilPage;
