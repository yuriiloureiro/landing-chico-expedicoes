import LanternsRising from "./LanternsRising";
import banner from "../assets/images/banner.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        src={banner}
        alt="Milhares de lanternas subindo ao céu durante o festival na Tailândia"
        className="hero-bg"
      />
      <div className="hero-overlay" />
      <LanternsRising count={10} />
      <div className="container hero-content">
        <h1 className="section-title hero-title">
          Solte o que te prende. Vá ver o céu se encher de luz.
        </h1>
        <p className="hero-sub">
          Uma expedição guiada, de perto, pelo Chico que já criou mais de 100
          roteiros pela Tailândia e conhece o país como poucos brasileiros
          conhecem.
        </p>
        <a
          className="btn-primary"
          href="https://wa.me/5591XXXXXXXXX?text=Oi%20Chico!%20Vi%20a%20p%C3%A1gina%20da%20expedi%C3%A7%C3%A3o%20e%20quero%20saber%20mais."
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com o Chico no WhatsApp
        </a>
      </div>
    </section>
  );
}
