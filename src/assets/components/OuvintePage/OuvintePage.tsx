import { useState } from "react";
import CreateAcc from "../Buttons/CreateAccBtn";

const OuvintePage: React.FC = () => {
  let nameInp = document.getElementById("ouvinte-name") as HTMLInputElement;
  let emailInp = document.getElementById("ouvinte-email") as HTMLInputElement;
  let passInp = document.getElementById("ouvinte-senha") as HTMLInputElement;
  let telInp = document.getElementById("ouvinte-cel") as HTMLInputElement;

  const [ouvinteName, setOuvinteName] = useState<string>("");
  const [ouvinteEmail, setOuvinteEmail] = useState<string>("");
  const [ouvintePass, setOuvintePass] = useState<string>("");
  const [ouvinteTel, setOuvinteTel] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ouvinteName,
      ouvinteEmail,
      ouvintePass,
      ouvinteTel,
    };
    console.log(data);

    // reset input values
    nameInp.value = "";
    emailInp.value = "";
    passInp.value = "";
    telInp.value = "";
  };

  return (
    <>
      <div className="container ouv-container">
        <p className="container-title">
          Registrando-se como: <span>Ouvinte</span>
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
        <form action="" id="ouvinte-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="ouvinte-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="ouvinte-name"
                placeholder="Seu nome"
                value={ouvinteName}
                onChange={(e) => setOuvinteName(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-email">
              Email
              <input
                required
                type="email"
                name="nome"
                id="ouvinte-email"
                placeholder="Seu email"
                value={ouvinteEmail}
                onChange={(e) => setOuvinteEmail(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-senha">
              Senha
              <input
                required
                type="password"
                name="senha"
                id="ouvinte-senha"
                placeholder="Sua senha"
                value={ouvintePass}
                onChange={(e) => setOuvintePass(e.target.value)}
              />
            </label>
            <label htmlFor="ouvinte-cel">
              Nº de Celular
              <input
                required
                type="tel"
                name="senha"
                id="ouvinte-cel"
                placeholder="Seu número de celular"
                value={ouvinteTel}
                onChange={(e) => setOuvinteTel(e.target.value)}
              />
            </label>
          </div>
          <CreateAcc />
        </form>
      </div>
    </>
  );
};

export default OuvintePage;
