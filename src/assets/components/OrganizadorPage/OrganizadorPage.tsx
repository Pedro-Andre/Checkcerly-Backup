// import React, { useState } from "react";
import CreateAcc from "../Buttons/CreateAccBtn";

function OrganizadorPage() {
  // let nameInp = document.getElementById(
  //   "organizador-login-name"
  // ) as HTMLInputElement;
  // let emailInp = document.getElementById(
  //   "organizador-login-email"
  // ) as HTMLInputElement;
  // let passInp = document.getElementById(
  //   "organizador-login-senha"
  // ) as HTMLInputElement;
  // let telInp = document.getElementById(
  //   "organizador-login-cel"
  // ) as HTMLInputElement;

  // const [organizadorName, setOrganizadorName] = useState<string>("");
  // const [organizadorEmail, setOrganizadorEmail] = useState<string>("");
  // const [organizadorPass, setOrganizadorPass] = useState<string>("");
  // const [organizadorTel, setOrganizadorTel] = useState<string>("");

  // function Registrar() {
  //   fetch("http://localhost:8080/registro/registro-organizador", {
  //     headers: {
  //       Accpet: "application/josn",
  //       "Contetn-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       organizadorName,
  //       organizadorEmail,
  //       organizadorPass,
  //       organizadorTel,
  //     }),
  //   }).then((res) => console.log(res));
  //   // .catch(res => console.log(res));
  // }

  // function LimparInputs() {
  //   nameInp.value = "";
  //   emailInp.value = "";
  //   passInp.value = "";
  //   telInp.value = "";
  // }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const data = {
    //   organizadorName,
    //   organizadorEmail,
    //   organizadorPass,
    //   organizadorTel,
    // };
    // console.log(data);

    // Registrar();
    // LimparInputs();
  };

  return (
    <>
      <div className="container organizador-container">
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
        <form id="organizador-login-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="organizador-login-name">
              Nome
              <input
                required
                type="text"
                name="nome"
                id="organizador-login-name"
                placeholder="Seu nome"
                // value={organizadorName}
                // onChange={(e) => setOrganizadorName(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-email">
              Email
              <input
                required
                type="text"
                name="nome"
                id="organizador-login-email"
                placeholder="Seu email"
                // value={organizadorEmail}
                // onChange={(e) => setOrganizadorEmail(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-senha">
              Senha
              <input
                required
                type="password"
                name="senha"
                id="organizador-login-senha"
                placeholder="Sua senha"
                // value={organizadorPass}
                // onChange={(e) => setOrganizadorPass(e.target.value)}
              />
            </label>
            <label htmlFor="organizador-login-cel">
              Nº de Celular
              <input
                required
                type="tel"
                name="senha"
                id="organizador-login-cel"
                placeholder="Seu número de celular"
                // value={organizadorTel}
                // onChange={(e) => setOrganizadorTel(e.target.value)}
              />
            </label>
          </div>
          <CreateAcc />
        </form>
      </div>
    </>
  );
}

export default OrganizadorPage;
