import { useEffect, useState } from "react";
import "./QuemSomos.css";

/**
 * Página Quem Somos
 *
 * Descreve a história, missão e valores do projeto Stella.
 * Apresenta informações sobre quem está por trás da iniciativa.
 * colocar a imagem do fundo.
 */
function QuemSomos() {
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);

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
    </div>
  );
}

export default QuemSomos;
