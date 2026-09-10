import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import MulheresNaCiencia from "./pages/MulheresNaCiencia/MulheresNaCiencia";
import Oficinas from "./pages/Oficinas/Oficinas";
import Eventos from "./pages/Eventos/Eventos";

/**
 * Componente App - Aplicação Principal do Site Stella
 *
 * Função: Gerenciar o roteamento (navegação entre páginas)
 *
 * Estrutura:
 * - Menu (cabeçalho fixo com navegação)
 * - Routes (roteador que renderiza a página correta)
 * - Footer (rodapé comum em todas as páginas)
 */
function App() {
  return (
    <>
      {/* Menu fixo no topo - aparece em todas as páginas */}
      <Menu />

      {/* Roteador - renderiza a página correta baseado na URL */}
      <Routes>
        {/* Página Home - Página inicial / */}
        <Route path="/" element={<Home />} />

        {/* Página Quem Somos */}
        <Route path="/QuemSomos" element={<QuemSomos />} />

        {/* Página Participantes */}
        <Route path="/Participantes" element={<QuemSomos />} />

        {/* Página Mulheres na Ciência */}
        <Route path="/MulheresNaCiencia" element={<MulheresNaCiencia />} />

        {/* Página Oficinas */}
        <Route path="/Oficinas" element={<Oficinas />} />

        {/* Página Eventos */}
        <Route path="/Eventos" element={<Eventos />} />
      </Routes>

      {/* Footer - rodapé comum em todas as páginas */}
      <Footer />
    </>
  );
}

export default App;
