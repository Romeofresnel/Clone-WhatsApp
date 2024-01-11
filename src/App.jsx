import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statut from "./pages/Statut";
import Appels from "./pages/Appels";
import Communaute from "./pages/Communaute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Actu" element={<Statut/>} />
          <Route path="/Appel" element={<Appels />} />
          <Route path="/Comm" element={<Communaute/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
