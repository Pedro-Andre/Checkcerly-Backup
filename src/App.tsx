import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CriarEvento from "./pages/CriarEvento";
import HistoricoEvents from "./pages/HistoricoEvents";
import LoginPage from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/criar-evento" element={<CriarEvento />}></Route>
          <Route
            path="/historico-eventos"
            element={<HistoricoEvents />}
          ></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/nova-senha"></Route>
          <Route path="*" element={"Not Found"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
