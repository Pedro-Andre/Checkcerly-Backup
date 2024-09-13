import "./EventoContainer.css";

function EventoContainer() {
  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Evento</p>
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
              Nome do Evento
              <input type="text" name="nome" />
            </label>
            <label htmlFor="">
              Assunto
              <input type="text" name="nome" />
            </label>
            <label htmlFor="">
              Local
              <input type="text" name="local" />
            </label>
            <div className="date-inputs">
              <label htmlFor="">
                Data (início)
                <input type="date" name="inicio" id="inicio-evento" />
              </label>
              <label htmlFor="">
                Data (término)
                <input type="date" name="fim" id="fim-evento" />
              </label>
            </div>
            <label htmlFor="">
              Hora (início / término)
              <input type="text" name="hora" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default EventoContainer;
