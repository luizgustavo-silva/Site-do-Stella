import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logoDoStella from "../../assets/logo_stella.png";
import logoDoIfscJvlle from "../../assets/logoDoIfscJvlle.png";
import { useState } from "react";

/**
 * Componente Footer - Rodapé do Site
 *
 * Funcionalidades:
 * - Exibe logo do Stella e IFSC Jvlle
 * - Email clicável que copia para área de transferência
 * - Links para redes sociais (Instagram e TikTok)
 * - Design responsivo com separador visual
 */
function Footer() {
  // Estado para controlar se o email foi copiado
  const [copiado, setCopiado] = useState(false);

  // Email de contato do projeto
  const email = "ifsc.stella@gmail.com";

  /**
   * Função para copiar o email para a área de transferência
   * Mostra "Copiado!" por 2 segundos e volta ao normal
   */
  const copiarEmail = () => {
    // Usa a API do navegador para copiar para clipboard
    navigator.clipboard.writeText(email);

    // Muda estado para mostrar "Copiado!"
    setCopiado(true);

    // Volta ao estado normal após 2 segundos
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer className="conteiner-rodape">
      {/* Seção esquerda: Logos */}
      <div className="secao-titulo">
        {/* Logo e nome do Stella */}
        <h1>
          <img
            src={logoDoStella}
            alt="A imagem é um ícone circular em estilo pixel art, com tons de roxo e creme. No centro, há a silhueta de perfil de uma pessoa, voltada para a direita. A figura tem traços suaves e elegantes, sem detalhes faciais. O cabelo é longo e esvoaçante, formado por três faixas curvas em tons de lilás. Sobre a cabeça, há um círculo roxo que lembra um coque ou um adorno, decorado com um pequeno símbolo semelhante a uma flor ou átomo.
O fundo dentro do círculo é roxo-escuro, pontilhado por estrelas e pequenos brilhos em tons claros e lilases, dando uma aparência cósmica ou mágica. Todo o desenho é cercado por uma borda circular clara.
A composição transmite uma sensação de delicadeza, mistério e conhecimento, lembrando um emblema ou logotipo relacionado ao universo, ciência ou feminilidade."
            className="logo-rodape"
          />{" "}
          Stella
        </h1>

        {/* Logo do IFSC Joinville */}
        <h1>
          <img
            src={logoDoIfscJvlle}
            alt="Logo IFSC"
            className="logo-ifsc-jvlle"
          />
        </h1>
      </div>

      {/* Seção direita: Contatos e Redes Sociais */}
      <div className="secao-contato">
        {/* Título da seção de contatos */}
        <h1>Contatos</h1>

        {/* Email clicável que copia para clipboard */}
        <p>
          <a
            className={`link-email ${copiado ? "copiado" : ""}`}
            onClick={copiarEmail}
            title={copiado ? "Copiado!" : "Clique para copiar o email"}
            role="button"
            tabIndex={0}
          >
            {`<${email}>`}
          </a>
        </p>

        {/* Link para Instagram */}
        <a
          href="https://www.instagram.com/stella.ifsc/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-contato"
          title="Visite nosso Instagram"
        >
          <span>
            <FaInstagram color="#593ea1" />
          </span>
        </a>

        {/* Link para TikTok */}
        <a
          href="https://www.tiktok.com/@stella.ifsc"
          target="_blank"
          rel="noopener noreferrer"
          className="link-contato"
          title="Visite nosso TikTok"
        >
          <span>
            <AiFillTikTok color="#593ea1" />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
