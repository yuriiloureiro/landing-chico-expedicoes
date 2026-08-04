import logo from "../assets/images/Logo-toporainomundo-chico.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={logo} alt="Tô Por Aí no Mundo" className="footer-logo" />

        <a
          href="https://www.instagram.com/toporainomundo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          @toporainomundo no Instagram
        </a>
      </div>

      <div className="container footer-credit-row">
        <a
          href="https://loureiroyuri.com"
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
