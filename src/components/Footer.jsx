import logo from "../assets/images/logo-horizontal.png";
import cadastur from "../assets/images/cadastur.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <img
            src={logo}
            alt="Você Por Aí no Mundo"
            className="footer-logo"
            height="40"
          />
          <p className="footer-tagline">
            Expedições em grupo pelo mundo. O Chico cuida de tudo — você só
            embarca.
          </p>

          <div className="footer-cadastur">
            <img src={cadastur} alt="Cadastur" height="22" />
          </div>
        </div>

        <nav className="footer-col" aria-label="Navegação">
          <span className="footer-col-titulo">Navegação</span>
          <a href="#expedicoes">Expedições</a>
          <a href="#sobre">O Chico</a>
          <a href="#experiencia">A experiência</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="footer-col">
          <span className="footer-col-titulo">Empresa</span>
          <div className="footer-empresa">
            <p>Você Por Aí no Mundo</p>
            <p>CNPJ 00.000.000/0001-00</p>
            <p>Rua Exemplo, 123 — Bairro</p>
            <p>Cidade — UF, 00000-000</p>
          </div>
        </div>
      </div>

      <div className="container footer-credit-row">
        <p className="footer-copy">
          © {new Date().getFullYear()} Você Por Aí no Mundo ·
        </p>

        <a
          href="https://loureiroyuri.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          Desenvolvido por Yuri Loureiro
        </a>
      </div>
    </footer>
  );
}
