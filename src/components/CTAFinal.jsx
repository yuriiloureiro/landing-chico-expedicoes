import LanternsRising from "./LanternsRising";
import "./CTAFinal.css";

export default function CTAFinal() {
  return (
    <section className="cta-final" id="contato">
      <LanternsRising count={7} />
      <div className="container cta-final-inner">
        <p className="eyebrow cta-eyebrow">Vamos conversar?</p>
        <h2 className="section-title cta-title">
          Me conta o que te chamou aqui. A gente decide juntos o resto.
        </h2>
        <p className="cta-sub">
          Chame no WhatsApp e marque uma conversa rápida comigo — sem
          compromisso, só pra tirar suas dúvidas e ver se essa expedição é pra
          você.
        </p>
        <a
          className="btn-primary"
          href="https://wa.me/5591XXXXXXXXX?text=Oi%20Chico!%20Quero%20conversar%20sobre%20a%20expedi%C3%A7%C3%A3o%20para%20a%20Tail%C3%A2ndia."
          target="_blank"
          rel="noopener noreferrer"
        >
          Chamar o Chico no WhatsApp
        </a>
        <span className="cta-signature">Chico Castilho</span>
      </div>
    </section>
  );
}
