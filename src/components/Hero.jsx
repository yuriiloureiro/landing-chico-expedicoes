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
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <LanternsRising count={10} />
      <div className="container hero-content">
        <h1 className="section-title hero-title">
          Solte o que te prende. O mundo está esperando.
        </h1>
        <p className="hero-sub">
          Expedições em grupo pela Tailândia, Lençóis Maranhenses e outros
          destinos, guiadas de perto pelo Chico, que já criou mais de 50
          roteiros e conhece cada lugar como poucos brasileiros conhecem.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#expedicoes">
            Ver as próximas expedições
          </a>
        </div>
      </div>
    </section>
  );
}
