import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./QuemSomos.css";
import professoraJoice from "../../assets/professora-joice.png";
import mayaraMuller from "../../assets/mayara-muller.png";
import yasmimOtt from "../../assets/yasmim-ott.png";
import anaEloisa from "../../assets/ana-eloisa.png";
import anitaKiesewetter from "../../assets/anita-kiesewetter.png";
import beatrizBenigni from "../../assets/beatriz-benigni.png";
import francineRech from "../../assets/francine-rech.png";
import gabrielaGomes from "../../assets/gabriela-gomes.png";
import gabrieleDaSilva from "../../assets/gabriele-da-silva.png";
import jessicaLouise from "../../assets/jessica-louise.png";
import kauani from "../../assets/kauani.png";
import pamelaLidia from "../../assets/pamela-lidia.png";
import sabrinaDoRosario from "../../assets/sabrina-do-rosario.png";
import sofiaSilveira from "../../assets/sofia-silveira.png";



/**
 * Página Quem Somos
 *
 * Descreve a história, missão e valores do projeto Stella.
 * Apresenta informações sobre quem está por trás da iniciativa.
 * colocar a imagem do fundo.
 */
function QuemSomos() {
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#participantes") return undefined;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById("participantes")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  const timelineEventos = [
    {
      id: "1",
      date: "2024",
      title: "Fundação do Stella",
      description:
        "O projeto nasceu para conectar meninas interessadas em ciência e tecnologia, gerando um espaço acolhedor para aprendizado e descoberta.",
    },
    {
      id: "2",
      date: "2025",
      title: "WIT",
      description:
        "Apresentamos o Projeto Stella no WIT 2025 (CSBC 2025), que ocorreu em Maceió - AL durante os dias 20 e 24 de julho.",
    },
    {
      id: "3",
      date: "2025",
      title: "SEPEI",
      description:
        "Participamos do SEPEI 2025 com um grupo de 12 meninas, apresentando 4 artigos e o nosso Escape Room: Códigos da Ciência na Feira de Inovação.",
    },
    {
      id: "4",
      date: "2025",
      title: "5° SNEPT",
      description:
        "Apresentamos o Escape Room: Códigos da Ciência na 5° SNEPT, que ocorreu em Brasília dos dias 6 a 9 de outubro.",
    },
    {
      id: "5",
      date: "2025",
      title: "CBIE (Congresso brasileiro de informatica na educacao)",
      description:
        "O Stella continua a crescer, expandindo suas atividades e impactando mais meninas em todo o país, promovendo STEM de forma inclusiva e inspiradora.",
    },
    {
      id: "6",
      date: "2026",
      title: "COTB (Congresso de tecnologia e biodiversidade)",
      description:
        "O Stella continua a crescer, expandindo suas atividades e impactando mais meninas em todo o país, promovendo STEM de forma inclusiva e inspiradora.",
    },
    {
      id: "7",
      date: "2026",
      title: "WIT 2026 (Ainda nao realizado)",
      description:
        "O Stella continua a crescer, expandindo suas atividades e impactando mais meninas em todo o país, promovendo STEM de forma inclusiva e inspiradora.",
    },
  ];

  useEffect(() => {
    const itens = document.querySelectorAll(".timeline-item");
    if (!itens.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleTimelineItems((prev) =>
              prev.includes(id) ? prev : [...prev, id],
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    itens.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="conteiner-quem-somos">
      <div className="conteiner-banner-quem-somos">
        <img alt="Fundo Quem Somos" className="fundo-banner-quem-somos" />
        <div className="sobreposicao-banner-quem-somos" />
        <div className="conteudo-banner-quem-somos">
          <div className="texto-banner-quem-somos">
            <h1 className="titulo-banner-quem-somos">Quem Somos?</h1>
            <p className="subtitulo-banner-quem-somos">
              Conheça a missão do Stella, nosso propósito e como queremos
              transformar a participação feminina em STEM.
            </p>
          </div>
        </div>
      </div>
      <section className="secao-sobre-quem-somos">
        <div className="conteudo-sobre-quem-somos">
          <p className="tag-sobre-quem-somos">Nossa história</p>
          <h2>Uma comunidade feita para inspirar e apoiar</h2>
          <p>
            O Stella nasceu para mostrar que meninas e jovens mulheres podem
            ocupar espaços de ciência, tecnologia e criatividade com confiança.
            Aqui, cada projeto, oficina e encontro foi pensado para despertar
            curiosidade, fortalecer talentos e criar conexões que transformam.
          </p>
          <p>
            Trabalhamos com empatia, troca de experiências e oportunidades reais
            para quem quer seguir em direção ao futuro. Nossa missão é fazer com
            que STEM seja um caminho claro, acolhedor e cheio de possibilidades.
          </p>
        </div>
      </section>
      <section className="secao-timeline-quem-somos">
        <div className="conteudo-timeline-quem-somos">
          <div className="cabecalho-timeline-quem-somos">
            <p className="tag-timeline-quem-somos">Linha do tempo</p>
            <h2>Passos importantes do Stella</h2>
            <p>
              Descubra como o projeto evoluiu ao longo dos anos, com marcos que
              construíram nossa jornada em STEM.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-linha" />
            {timelineEventos.map((evento, index) => (
              <div
                className={`timeline-item timeline-item-${
                  index % 2 === 0 ? "left" : "right"
                } ${visibleTimelineItems.includes(evento.id) ? "ativo" : ""}`}
                key={evento.id}
                data-id={evento.id}
              >
                <div className="timeline-conteudo">
                  <span className="timeline-data">{evento.date}</span>
                  <h3>{evento.title}</h3>
                  <p>{evento.description}</p>
                </div>
                <div className="timeline-bola" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="secao-participantes" id="participantes">
        <div className="conteudo-participantes">
          <div className="cabecalho-participantes">
            <p className="tag-participantes">Participantes</p>
            <h2>Quem faz parte do Stella?</h2>
          </div>
          <div className="grade-participantes zigzag-participantes">
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={professoraJoice}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Profª Joice Luiz Jeronimo</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Mayara Müller</span>
            <img
              className="foto-participante"
              src={mayaraMuller}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={yasmimOtt}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Yasmim Ott</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Ana Eloisa L. Da Conceição</span>
            <img
              className="foto-participante"
              src={anaEloisa}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={anitaKiesewetter}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Anita Kiesewetter</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Francine Rech</span>
            <img
              className="foto-participante"
              src={francineRech}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={sofiaSilveira}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Sofia Silveira</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Gabriela Gomes</span>
            <img
              className="foto-participante"
              src={gabrielaGomes}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={sabrinaDoRosario}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Sabrina Do Rosário</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Beatriz Benigni</span>
            <img
              className="foto-participante"
              src={beatrizBenigni}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={gabrieleDaSilva}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Gabriele da Silva</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Jéssica Louise</span>
            <img
              className="foto-participante"
              src={jessicaLouise}
              alt="Participante do Stella"
            />
          </div>
          <div className="linha-participante esquerda">
            <img
              className="foto-participante"
              src={pamelaLidia}
              alt="Participante do Stella"
            />
            <span className="nome-participante">Pâmela Lídia</span>
          </div>
          <div className="linha-participante direita">
            <span className="nome-participante">Kauani</span>
            <img
              className="foto-participante"
              src={kauani}
              alt="Participante do Stella"
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;
