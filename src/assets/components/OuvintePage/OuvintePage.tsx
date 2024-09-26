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

    const data = { ouvinteName, ouvinteEmail, ouvintePass, ouvinteTel };
    console.log(data);
    /*
    fetch("http://localhost:5173/registro/registro-ouvinte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ouvinteName,
        ouvinteEmail,
        ouvintePass,
        ouvinteTel,
      }),
    })
      .then((res) => {
        console.log("Status da resposta:", res.status); // Verifica o status da resposta
        return res.text(); // Altere para text() para inspecionar a resposta
      })
      .then((data) => {
        console.log("Dados recebidos:", data);
        try {
          const jsonData = JSON.parse(data); // Tente converter manualmente para JSON
          console.log(jsonData);
        } catch (err) {
          console.error("Erro ao parsear JSON:", err);
        }
      });
      */

    fetch("http://localhost:5173/registro/registro-ouvinte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ouvinteName,
        ouvinteEmail,
        ouvintePass,
        ouvinteTel,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na requisição: " + res.status);
        }
        if (res.headers.get("Content-Type")?.includes("application/json")) {
          return res.json(); // Só faz parsing de JSON se o cabeçalho for correto
        } else {
          return res.text(); // Retorna texto bruto caso não seja JSON
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // });

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
