import "./Home.css";
import { FaCog } from "react-icons/fa";
import participantesDoStella from "../../assets/participantesDoStella.png";

/**
 * Componente Home - Página Inicial do Site Stella
 *
 * Exibe um banner com:
 * - Imagem de fundo com os participantes do projeto
 * - Texto animado alternando entre "Stella" e "STEM"
 * - Engrenagem rotacionando no lugar do "o" em "ao"
 * - Subtítulo inspirador
 */
function Home() {
  return (
    <div className="conteiner-home">
      {/* Banner principal da home */}
      <div className="conteiner-banner">
        {/* Imagem de fundo semi-transparente */}
        <img
          src={participantesDoStella}
          alt="Participantes do Stella"
          className="fundo-banner"
        />

        {/* Sobreposição com gradiente roxo */}
        <div className="sobreposicao-banner"></div>

        {/* Conteúdo do banner (textos e ícones) */}
        <div className="conteudo-banner">
          <div className="texto-banner">
            {/* Título com engrenagem animada */}
            <h1 className="titulo-banner">
              Bem-vindo(a) a{/* Engrenagem que substitui o "o" em "ao" */}
              <FaCog className="engrenagem-no-texto" />{" "}
              {/* Texto animado que alterna entre Stella e STEM */}
              <span className="texto-animado">
                <span className="texto-stella">Stella</span>
                <span className="texto-stem">STEM</span>
              </span>
              !
            </h1>

            {/* Subtítulo inspirador */}
            <p className="subtitulo-banner">Inspirando meninas em STEM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
