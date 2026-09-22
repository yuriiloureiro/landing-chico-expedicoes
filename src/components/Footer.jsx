import logo from "../assets/images/logo-horizontal.png";
import cadastur from "../assets/images/cadastur.png";
import { linkWhatsApp } from "../data/expedicoes";
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
            Expedições em grupo pelo mundo. O Chico cuida de tudo, você só
            embarca.
          </p>

          <div className="footer-cadastur">
            <img src={cadastur} alt="Cadastur" height="22" />
          </div>

          <div className="footer-empresa">
            <p>Você Por Aí no Mundo</p>
            <p>CNPJ 60.044.873/0001-28</p>
            <p>Praia Grande — SP — 11700-130</p>
          </div>
        </div>

        <nav className="footer-col" aria-label="Navegação">
          <span className="footer-col-titulo">Navegação</span>
          <a href="#expedicoes">Expedições</a>
          <a href="#sobre">O Chico</a>
          <a href="#experiencia">A experiência</a>
        </nav>

        <nav className="footer-col" aria-label="Redes sociais">
          <span className="footer-col-titulo">Onde nos encontrar</span>
          <a
            href="https://www.instagram.com/toporainomundo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@toporainomundo"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href={linkWhatsApp(
              "Oi Chico! Vi o site e quero saber mais sobre as expedições.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://www.youtube.com/channel/UCOrTjcYIXlzsXYstKzENkdQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </nav>
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
