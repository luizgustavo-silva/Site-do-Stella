import "./Oficinas.css";
import computacaoDesplugada from "../../assets/images/computacaoDesplugada.jpg";
import programacaoScratch from "../../assets/images/Scratch.jpg";
import pulseirasBinario from "../../assets/images/pulseirinhasBinario.jpg";

/* 
 * Página Oficinas
 *
 * Apresenta as oficinas e workshops disponíveis no projeto Stella.
 * Inclui descrições, cronograma e formas de participação.
 */
function Oficinas() {
  return (
    <div className="conteiner-oficinas">
      <div className="conteiner-banner-oficinas">
        <img alt="Fundo Oficinas" className="fundo-banner-oficinas" />
        <div className="sobreposicao-banner-oficinas" />
        <div className="conteudo-banner-oficinas">
          <div className="texto-banner-oficinas">
            <h1 className="titulo-banner-oficinas">Oficinas</h1>
            <p className="subtitulo-banner-oficinas">
              Descubra nossas oficinas e experiências de aprendizado em ciência,
              tecnologia e criatividade.
            </p>
          </div>
        </div>
      </div>

      <section className="secao-sobre-oficinas">
        <div className="conteudo-sobre-oficinas">
          <p className="tag-sobre-oficinas">Nossas oficinas</p>
          <h2>Aprender fazendo, criar compartilhando</h2>
          <p>
            Aqui você pode apresentar as oficinas, os temas trabalhados e as
            experiências oferecidas pelo Stella.aaaaaa
          </p>
        </div>
         
      </section>
      <section className="secao-oficinas-visual">
        <div className="titulo-oficinas-linha">
          <span className="ornamento-oficinas ornamento-esquerda" aria-hidden="true">
            ~
          </span>
          <h2>Oficinas</h2>
          <span className="ornamento-oficinas ornamento-direita" aria-hidden="true">
            ~
          </span>
        </div>

        <div className="destaques-oficinas">
          <span>Explorando o Pensamento Computacional na Prática</span>
          <span>Introdução à Programação Criativa</span>
        </div>

        <div className="cards-oficinas">
          <article className="card-oficina card-oficina-1">
            <div className="nuvem-card nuvem-card-1">
              <span>Computação desligada</span>
            </div>
            <img
              src={computacaoDesplugada}
              alt="Aluno em atividade de computação desplugada"
            />
          </article>

          <article className="card-oficina card-oficina-2">
            <div className="nuvem-card nuvem-card-2">
              <span>Programando um jogo com Scratch</span>
            </div>
            <img
              src={programacaoScratch}
              alt="Alunos trabalhando no Scratch"
            />
          </article>

          <article className="card-oficina card-oficina-3">
            <div className="nuvem-card nuvem-card-3">
              <span>Oficina</span>
              <strong>PULSEIRINHAS DE BINÁRIO:</strong>
              <em>micangas &amp; bits</em>
            </div>
            <img
              src={pulseirasBinario}
              alt="Oficina de pulseiras de binário"
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Oficinas;
