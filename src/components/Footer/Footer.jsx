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
    navigator.clipboard.writeText(email);

    setCopiado(true);

    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer className="conteiner-rodape">
      {/* Seção esquerda: Logos */}
      <div className="secao-titulo">
        <h1>
          <img src={logoDoStella} alt="Logo Stella" className="logo-rodape" />{" "}
          Stella
        </h1>

        <h1>
          <img
            src={logoDoIfscJvlle}
            alt="Logo IFSC"
            className="logo-ifsc-jvlle"
          />
        </h1>
      </div>

      {/* Seção direita: Contatos */}
      <div className="secao-contato">
        <h1>Contatos</h1>

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
      <div className="secao-direitos">
        © 2026 Stella • Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
