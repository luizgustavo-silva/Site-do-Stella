import "./Oficinas.css";
import computacaoDesplugada from "../../assets/computacaoDesplugada.png";
import programacaoScratch from "../../assets/Scratch.png";
import pulseirasBinario from "../../assets/pulseirinhasBinario.png";
import plaquinhaStella from "../../assets/placaComNomeDoStella.png";
import bolinhasPuzzle from "../../assets/BolinhasPuzzle.png";
import legoPuzzle from "../../assets/legoPuzzle.png";
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
            experiências oferecidas pelo Stella.
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

      <section className="secao-escape-room">
        <div className="linha-escape-room">
          <span className="texto-lateral esquerda">Atividade lúdica e interativa</span>
          <div className="titulo-escape-room">
            <h2>Escape Room</h2>
            <p>CÓDIGO DAS CIÊNCIAS</p>
          </div>
          <span className="texto-lateral direita">Enigmas inspirados em cientistas</span>
        </div>

        <div className="cards-escape-room">
          <article className="card-escape-room">
            <div className="nuvem-card nuvem-card-escape nuvem-card-escape-1">
              <span>Puzzle de bolinhas</span>
            </div>
            <img
              src={bolinhasPuzzle}
              alt="Atividade do escape room com peças de montagem"
            />
          </article>

          <article className="card-escape-room">
            <div className="nuvem-card nuvem-card-escape nuvem-card-escape-2">
              <span></span>
            </div>
            <img
              src={plaquinhaStella}
              alt="Pessoas resolvendo enigmas em computador"
            />
          </article>

          <article className="card-escape-room">
            <div className="nuvem-card nuvem-card-escape nuvem-card-escape-3">
              <span>Construindo o código</span>
            </div>
            <img
              src={legoPuzzle}
              alt="Materiais científicos do escape room"
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Oficinas;
