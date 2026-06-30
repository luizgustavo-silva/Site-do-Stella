import "./Home.css";
import { FaCog } from "react-icons/fa";
import participantesDoStella from "../../assets/participantesDoStella.png";
import marieCurie from "../../assets/marie-curie.png";
import adaLovelace from "../../assets/ada-lovelace.png";
import katherineJohnson from "../../assets/katherine-johnson.png";
import tuyouyou from "../../assets/tu-youyou.png";
import bettyHoltrop from "../../assets/betty-holtrop.jpg";
import graceHopper from "../../assets/grace-hopper.png";
import gladysWest from "../../assets/gladys-west.jpg";
import maryKeller from "../../assets/mary-keller.png";
import annieEasley from "../../assets/annie-easley.jpg";
import hedyLamarr from "../../assets/hedy-lamarr.jpg";
import joanClarke from "../../assets/joan-clarke.png";
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
      <div className="conteiner-cards-motivacoes">
        <div className="card-motivacao">
          <h1 className="card-title">Motivar</h1>
          <p className="card-paragrafo"></p>
        </div>
        <div className="card-motivacao">
          <h1 className="card-title">Empoderar</h1>
          <p className="card-paragrafo"></p>
        </div>
        <div className="card-motivacao">
          <h1 className="card-title">Ensinar</h1>
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
              <a
                href="https://pt.wikipedia.org/wiki/Marie_Curie"
                target="_blank"
              >
                <img src={marieCurie} alt="Marie Curie" />
              </a>
              <h2>Marie Curie</h2>
            </div>

            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Ada_Lovelace"
                target="_blank"
              >
                <img src={adaLovelace} alt="Ada Lovelace" />
              </a>
              <h2>Ada Lovelace</h2>
            </div>

            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Katherine_Johnson"
                target="_blank"
              >
                <img src={katherineJohnson} alt="Katherine Johnson" />
              </a>
              <h2>Katherine Johnson</h2>
            </div>

            <div className="card-cientista">
              <a href="https://pt.wikipedia.org/wiki/Tu_Youyou" target="_blank">
                <img src={tuyouyou} alt="Tu Youyou" />
              </a>
              <h2>Tu Youyou</h2>
            </div>

            {/* Repetição para ficar infinito */}
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Marie_Curie"
                target="_blank"
              >
                <img src={marieCurie} alt="Marie Curie" />
              </a>
              <h2>Marie Curie</h2>
            </div>

            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Betty_Holtrop"
                target="_blank"
              >
                <img src={bettyHoltrop} alt="Betty Holtrop" />
              </a>
              <h2>Betty Holtrop</h2>
            </div>
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Grace_Hopper"
                target="_blank"
              >
                <img src={graceHopper} alt="Grace Hopper" />
              </a>
              <h2>Grace Hopper</h2>
            </div>
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Mary_Keller"
                target="_blank"
              >
                <img src={maryKeller} alt="Mary Keller" />
              </a>
              <h2>Mary Keller</h2>
            </div>
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Gladys_West"
                target="_blank"
              >
                <img src={gladysWest} alt="Gladys West" />
              </a>
              <h2>Gladys West</h2>
            </div>
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Hedy_Lamarr"
                target="_blank"
              >
                <img src={hedyLamarr} alt="Hedy Lamarr" />
              </a>
              <h2>Hedy Lamarr</h2>
            </div>
            <div className="card-cientista">
              <a
                href="https://pt.wikipedia.org/wiki/Joan_Clarke"
                target="_blank"
              >
                <img src={joanClarke} alt="Joan Clarke" />
              </a>
              <h2>Joan Clarke</h2>
            </div>
          </div>
        </div>
        <button className="btn-saiba-mais" disabled>
          Saiba mais clicando nas fotos
        </button>
      </div>
    </div>
  );
}

export default Home;
