import { useEffect } from "react";
import "./Home.css";
import { FaCog, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";
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
  const cardsMotivacao = [
    {
      icone: <FaLightbulb className="icone-card-motivacao" />,
      titulo: "Inspirar",
      texto:
        "Mostramos que ciência, tecnologia e criatividade podem ser caminhos reais para transformar sonhos em conquistas.",
    },
    {
      icone: <FaRocket className="icone-card-motivacao" />,
      titulo: "Crescer",
      texto:
        "Cada encontro é uma oportunidade de aprender, se desenvolver e descobrir o potencial que já existe em cada pessoa.",
    },
    {
      icone: <FaHeart className="icone-card-motivacao" />,
      titulo: "Conectar",
      texto:
        "Criamos um espaço acolhedor para meninas se sentirem apoiadas, vistas e motivadas a seguir em frente.",
    },
  ];

  useEffect(() => {
    const elementos = document.querySelectorAll(".reveal");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elementos.forEach((elemento) => observer.observe(elemento));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="conteiner-home">
      {/* Banner principal da home */}
      <div className="conteiner-banner reveal">
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
              <span className="ponto-exclamacao">!</span>
            </h1>

            {/* Subtítulo inspirador */}
            <p className="subtitulo-banner">Inspirando meninas em STEM</p>
          </div>
        </div>
      </div>
      <section className="secao-sobre reveal">
        <div className="conteudo-sobre">
          <div className="cabecalho-sobre">
            <p className="tag-sobre">Sobre o Stella</p>
            <h2>O que é o Stella?</h2>
            <p className="descricao-sobre">
              O Stella é um projeto que aproxima meninas de ciência, tecnologia
              e inovação, oferecendo atividades, oficinas e uma comunidade
              acolhedora para desenvolver habilidades e confiança.
            </p>
            <p className="descricao-sobre descricao-sobre-detalhe">
              Aqui, o foco é inspirar jovens a descobrir que STEM pode ser um
              caminho real e cheio de oportunidades, sempre com apoio e espírito
              colaborativo.
            </p>
          </div>
        </div>
      </section>
      <section className="secao-motivacao reveal">
        <div className="cabecalho-motivacao">
          <p className="tag-motivacao">Por que o Stella existe?</p>
          <h2>Motivação para crescer, criar e transformar</h2>
        </div>

        <div className="conteiner-cards-motivacoes">
          {cardsMotivacao.map((card, index) => (
            <article className="card-motivacao reveal" key={index}>
              <div className="icone-card-motivacao-wrapper">{card.icone}</div>
              <h3>{card.titulo}</h3>
              <p>{card.texto}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="secao-mulheres-ciencia reveal">
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
      <section className="secao-dados reveal">
        <div className="cabecalho-dados">
          <h2>Alguns dados</h2>
          <p>
            Estatísticas sobre a presença das mulheres em STEM no Brasil e no
            mundo.
          </p>
        </div>

        <div className="grid-dados">
          <div className="dados-item reveal">
            <div className="grafico">
              <span>35%</span>
            </div>
            <p className="texto-dado">
              Aproximadamente 35% dos graduados em STEM são mulheres.
            </p>
            <strong>Mulheres graduadas em STEM</strong>
          </div>

          <div className="dados-item reveal">
            <div className="grafico">
              <span>28,2%</span>
            </div>
            <p className="texto-dado">
              Aproximadamente 28,2% da força de trabalho global em STEM são
              mulheres.
            </p>
            <strong>Mulheres trabalhando em STEM no mundo</strong>
          </div>

          <div className="dados-item reveal">
            <div className="grafico">
              <span>26%</span>
            </div>
            <p className="texto-dado">
              Aproximadamente 26% das pessoas ocupadas em STEM no Brasil são
              mulheres.
            </p>
            <strong>Mulheres ocupadas em STEM no Brasil</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
