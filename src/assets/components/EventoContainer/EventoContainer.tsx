import "./EventoContainer.css";
import { useState } from "react";
import CreateEventBtn from "../Buttons/CreateEventBtn";

const EventoContainer: React.FC = () => {
  const [eventName, setEventName] = useState<string>("");
  const [eventTheme, setEventTheme] = useState<string>("");
  const [eventLocal, setEventLocal] = useState<string>("");
  const [eventStart, setEventStart] = useState<string>("");
  const [eventEnd, setEventEnd] = useState<string>("");
  const [eventHour, setEventHour] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      nomeEvento: eventName,
      assuntoEvento: eventTheme,
      dataInicio: eventStart,
      dataFim: eventEnd,
      horaEvento: eventHour,
      localEvento: eventLocal,
    };

    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log("Dados recebidos:", data))
      .catch((err) => console.error("Erro na requisição:", err));

    // Reset inputs
    setEventName("");
    setEventTheme("");
    setEventLocal("");
    setEventStart("");
    setEventEnd("");
    setEventHour("");
  };

  // let nameInp = document.getElementById("event-name") as HTMLInputElement;
  // let themeInp = document.getElementById("event-theme") as HTMLInputElement;
  // let localInp = document.getElementById("event-local") as HTMLInputElement;
  // let startInp = document.getElementById("event-start") as HTMLInputElement;
  // let endInp = document.getElementById("event-end") as HTMLInputElement;
  // let hourInp = document.getElementById("event-hour") as HTMLInputElement;

  // const [eventName, setEventName] = useState<string>("");
  // const [eventTheme, setEventTheme] = useState<string>("");
  // const [eventLocal, setEventLocal] = useState<string>("");
  // const [eventStart, setEventStart] = useState<string>("");
  // const [eventEnd, setEventEnd] = useState<string>("");
  // const [eventHour, setEventHour] = useState<string>("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  // const data = {
  //   eventName,
  //   eventTheme,
  //   eventLocal,
  //   eventStart,
  //   eventEnd,
  //   eventHour,
  // };
  // console.log(data);

  // fetch("http://localhost:8080/events", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   body: JSON.stringify({
  //     nomeEvento: eventName,
  //     assuntoEvento: eventTheme,
  //     dataInicio: eventStart,
  //     dataFim: eventEnd,
  //     horaEvento: eventHour,
  //     localEvento: eventLocal,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("Dados recebidos:", data);
  //     try {
  //       const jsonData = JSON.stringify(data);
  //       console.log(jsonData);
  //     } catch (err) {
  //       console.log("Erro no parse JSON:", err);
  //     }
  //   });

  // reset input values
  //   nameInp.value = "";
  //   themeInp.value = "";
  //   localInp.value = "";
  //   startInp.value = "";
  //   endInp.value = "";
  //   hourInp.value = "";

  // };

  return (
    <>
      <div className="container">
        <p className="container-title">Informações do Evento</p>
        <svg
          width="100%"
          height="95rem"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container event-svg-container"
        >
          <rect
            rx="20"
            width="100%"
            height="95rem"
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
        <form action="" id="event-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="event-name">
              Nome do Evento
              <input
                required
                type="text"
                name="nome-evento"
                id="event-name"
                placeholder="Nome do evento"
                // value={eventName}
                // onChange={(e) => setEventName(e.target.value)}
              />
            </label>
            <label htmlFor="event-theme">
              Assunto
              <input
                required
                type="text"
                name="nome"
                id="event-theme"
                placeholder="Assunto do evento"
                // value={eventTheme}
                // onChange={(e) => setEventTheme(e.target.value)}
              />
            </label>
            <label htmlFor="event-local">
              Local
              <input
                // required
                type="text"
                name="local"
                id="event-local"
                placeholder="Local do evento"
                // value={eventLocal}
                // onChange={(e) => setEventLocal(e.target.value)}
              />
            </label>
            <div className="date-inputs">
              <label htmlFor="event-start">
                Data (início)
                <input
                  required
                  type="date"
                  name="inicio"
                  id="event-start"
                  // value={eventStart}
                  // onChange={(e) => setEventStart(e.target.value)}
                />
              </label>
              <label htmlFor="event-end">
                Data (término)
                <input
                  required
                  type="date"
                  name="fim"
                  id="event-end"
                  // value={eventEnd}
                  // onChange={(e) => setEventEnd(e.target.value)}
                />
              </label>
            </div>
            <label htmlFor="event-hour">
              Hora (início / término)
              <input
                required
                type="text"
                name="hora"
                id="event-hour"
                placeholder="Hora do evento"
                // value={eventHour}
                // onChange={(e) => setEventHour(e.target.value)}
              />
            </label>
          </div>
          <CreateEventBtn />
        </form>
      </div>
    </>
  );
};

export default EventoContainer;
