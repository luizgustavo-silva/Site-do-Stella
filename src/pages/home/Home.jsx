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
      <div className="conteiner-cards-motivos">
        <div className="card-motivo">
          <h1 className="card-title"></h1>
          <p className="card-paragrafo"> </p>
        </div>
        <div className="card-motivo">
          <h1 className="card-title"></h1>
          <p className="card-paragrafo"></p>
        </div>
        <div className="card-motivo">
          <h1 className="card-title"></h1>
          <p className="card-paragrafo"></p>
        </div>
      </div>
      <div className="secao-mulheres-ciencia">
        <div className="cabecalho-mulheres">
          <h1>Mulheres na Ciência</h1>
          <p>
            Mulheres que mudaram o mundo e continuam revolucionando ele até
            hoje.
          </p>
        </div>

        <div className="carrossel">
          <div className="carrossel-track">
            <div className="card-cientista">
              <img src="/imagens/marie-curie.jpg" alt="Marie Curie" />
              <h2>Marie Curie</h2>
            </div>

            <div className="card-cientista">
              <img src="/imagens/ada-lovelace.jpg" alt="Ada Lovelace" />
              <h2>Ada Lovelace</h2>
            </div>

            <div className="card-cientista">
              <img
                src="/imagens/katherine-johnson.jpg"
                alt="Katherine Johnson"
              />
              <h2>Katherine Johnson</h2>
            </div>

            <div className="card-cientista">
              <img src="/imagens/tu-youyou.jpg" alt="Tu Youyou" />
              <h2>Tu Youyou</h2>
            </div>

            {/* Repetição para ficar infinito */}
            <div className="card-cientista">
              <img src="/imagens/marie-curie.jpg" alt="Marie Curie" />
              <h2>Marie Curie</h2>
            </div>

            <div className="card-cientista">
              <img src="/imagens/ada-lovelace.jpg" alt="Ada Lovelace" />
              <h2>Ada Lovelace</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
