import "./RegistroPage.css";

function RegistroPage() {
  return (
    <>
      <div className="container">
        <p className="container-title">Registre-se como:</p>

        <div className="options-container">
          <div className="option">
            <h3 className="option-title">Organizador de Eventos</h3>
            <p>• Crie eventos</p>
            <p>• Controle a lista de participantes</p>
          </div>
          <div className="option">
            <h3 className="option-title">Ouvinte (participante)</h3>
            <p>• Registre sua presença em eventos</p>
            <p>
              • Receba certificados de participação{" "}
              <span>(quando disponível)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistroPage;
