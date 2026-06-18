import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import logoDoStella from "../../assets/logo_stella.png";
import logoDoIfscJvlle from "../../assets/logoDoIfscJvlle.png";
import { useState } from "react";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "ifsc.stella@gmail.com";

  // funcao anonima que faz copiar email
  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-container">
      <div className="lado-titulo">
        <h1>
          <img
            src={logoDoStella}
            alt="A imagem é um ícone circular em estilo pixel art, com tons de roxo e creme. No centro, há a silhueta de perfil de uma pessoa, voltada para a direita. A figura tem traços suaves e elegantes, sem detalhes faciais. O cabelo é longo e esvoaçante, formado por três faixas curvas em tons de lilás. Sobre a cabeça, há um círculo roxo que lembra um coque ou um adorno, decorado com um pequeno símbolo semelhante a uma flor ou átomo.
O fundo dentro do círculo é roxo-escuro, pontilhado por estrelas e pequenos brilhos em tons claros e lilases, dando uma aparência cósmica ou mágica. Todo o desenho é cercado por uma borda circular clara.
A composição transmite uma sensação de delicadeza, mistério e conhecimento, lembrando um emblema ou logotipo relacionado ao universo, ciência ou feminilidade."
            className="footer-logo"
          />{" "}
          Stella
        </h1>
        <h1>
          <img src={logoDoIfscJvlle} alt="" className="footer-logo-jvlle" />
        </h1>
      </div>
      <div className="lado-contato">
        <h1>Contatos</h1>
        <p>
          <a
            className={`email-link ${copied ? "copied" : ""}`}
            onClick={copiarEmail}
            title={copied ? "Copiado!" : "Clique para copiar o email"}
            role="button"
            tabIndex={0}
          >
            {`<${email}>`}
          </a>
        </p>
        <a
          href="https://www.instagram.com/stella.ifsc/"
          target="_blank"
          className="link-contato"
        >
          <span>
            <FaInstagram color="#593ea1" />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@stella.ifsc"
          target="_blank"
          className="link-contato"
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
