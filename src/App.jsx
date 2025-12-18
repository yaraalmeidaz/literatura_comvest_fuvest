import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aulas from "./pages/Aulas";
import Inscricao from "./pages/Inscricao";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        {/* ROTAS DO SITE */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* FOOTER UNIVERSAL — aparece em todas as páginas */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
