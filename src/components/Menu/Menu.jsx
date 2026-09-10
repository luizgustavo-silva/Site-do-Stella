import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import logo from "../../assets/logo_stella.png";

/**
 * Componente Menu - Barra de Navegação do Site
 *
 * Funcionalidades:
 * - Menu fixo no topo que acompanha o scroll
 * - Reduz e encolhe quando o usuário faz scroll para baixo
 * - Contém logo do Stella e links de navegação
 * - Links respondem ao hover com animações suaves
 */
function Menu() {
  // Estado para controlar se o menu deve estar em modo reduzido
  const [rolado, setRolado] = useState(false);
  const [participantesVisivel, setParticipantesVisivel] = useState(false);
  const location = useLocation();

  /**
   * Hook useEffect - Monitora o scroll da página
   * Quando o usuário faz scroll acima de 30px, o menu encolhe
   */
  useEffect(() => {
    // Função disparada quando detecta scroll
    const aoRolar = () => setRolado(window.scrollY > 30);

    // Adiciona listener de scroll com passive: true para melhor performance
    window.addEventListener("scroll", aoRolar, { passive: true });

    // Cleanup - remove listener ao desmontar componente
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const secaoParticipantes = document.getElementById("participantes");
    if (!secaoParticipantes || location.pathname !== "/QuemSomos") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setParticipantesVisivel(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(secaoParticipantes);
    return () => observer.disconnect();
  }, [location.pathname]);

  const participantesAtivo =
    location.pathname === "/QuemSomos" && participantesVisivel;
  const voltarAoInicio = () => window.scrollTo(0, 0);
  const irParaParticipantes = () => {
    document
      .getElementById("participantes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Cabeçalho/Menu fixo que acompanha o scroll */}
      <header className={`cabecalho-menu ${rolado ? "reduzido" : ""}`}>
        {/* Container da logo do Stella */}
        <div className="logo-stella">
          <img src={logo} alt="Logo Stella" className="logo-menu" />
        </div>

        {/* Seção de Navegação */}
        <nav className="conteiner-nav">
          {/* Lista de links de navegação */}
          <ul className="conteiner-lista">
            {/* Link para Home */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link-nav ${isActive && !participantesAtivo ? "active" : ""}`
                }
                to="/"
                end
                onClick={voltarAoInicio}
              >
                Home
              </NavLink>
            </li>

            {/* Link para Quem Somos */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link-nav ${isActive && !participantesAtivo ? "active" : ""}`
                }
                to="/QuemSomos"
                onClick={voltarAoInicio}
              >
                Quem somos
              </NavLink>
            </li>

            {/* Link para Participantes */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link-nav ${isActive && participantesAtivo ? "active" : ""}`
                }
                to="/QuemSomos#participantes"
                onClick={irParaParticipantes}
              >
                Participantes
              </NavLink>
            </li>

            {/* Link para Oficinas */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link-nav ${isActive ? "active" : ""}`
                }
                to="/Oficinas"
                onClick={voltarAoInicio}
              >
                Oficinas
              </NavLink>
            </li>

            {/* Link para Eventos */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link-nav ${isActive ? "active" : ""}`
                }
                to="/Eventos"
                onClick={voltarAoInicio}
              >
                Eventos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu;
