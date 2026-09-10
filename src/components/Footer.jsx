import logo from "../assets/images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Tô Por Aí no Mundo"
            className="footer-logo"
            width="64"
            height="64"
          />
          <a
            href="https://www.instagram.com/toporainomundo/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-instagram"
          >
            @toporainomundo no Instagram
          </a>
        </div>

        <nav className="footer-links" aria-label="Navegação">
          <a href="#expedicoes">Expedições</a>
          <a href="#sobre">O Chico</a>
          <a href="#experiencia">A experiência</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <div className="container footer-credit-row">
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
