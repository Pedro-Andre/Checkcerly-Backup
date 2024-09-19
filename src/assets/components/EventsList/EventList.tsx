import "./EventList.css";
import ParticipantsBtn from "../Buttons/ParticipantsBtn";

function EventList() {
  return (
    <>
      <div className="container event-list">
        <p className="container-title events-title">
          Seus eventos <span>(0)</span>
        </p>
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-container svg-list"
        >
          <rect
            rx="20"
            width="100%"
            x="-0"
            y="0"
            stroke="url(#paint0_linear_227_259)"
            strokeWidth="2"
            className="svg-list"
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
        <table>
          <thead>
            <tr>
              <th>Nome do Evento</th>
              <th>Data</th>
              <th>Local</th>
              <th>Registros</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>evento de fulaninho</td>
              <td>00/00/0000</td>
              <td>Uniceplac</td>
              <td>100</td>
              <td className="event-list-btn">
                <ParticipantsBtn />
              </td>
            </tr>
            <tr>
              <th>Nome do Evento</th>
              <th>Data</th>
              <th>Local</th>
              <th>Registros</th>
              <th>Ações</th>
            </tr>
            <tr>
              <td>evento de fulaninho</td>
              <td>00/00/0000</td>
              <td>Uniceplac</td>
              <td>100</td>
              <td className="event-list-btn">
                <ParticipantsBtn />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EventList;
