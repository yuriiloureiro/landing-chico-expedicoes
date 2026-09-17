import { linkWhatsApp } from "../data/expedicoes";
import ScrollReveal from "./ScrollReveal";
import "./RedesSociais.css";

const canais = [
  {
    nome: "Instagram",
    descricao: "Bastidores das expedições e fotos reais dos grupos.",
    href: "https://www.instagram.com/toporainomundo/",
    icone: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    nome: "WhatsApp",
    descricao: "Fale direto com o Chico — atendimento humano.",
    href: linkWhatsApp(
      "Oi Chico! Vi o site e quero saber mais sobre as expedições.",
    ),
    icone: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.5 3.9 1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
      </svg>
    ),
  },
  {
    nome: "YouTube",
    descricao: "Vídeos das expedições e o dia a dia pelo mundo.",
    href: "https://www.youtube.com/channel/UCOrTjcYIXlzsXYstKzENkdQ",
    icone: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
      </svg>
    ),
  },
];

export default function RedesSociais() {
  return (
    <section className="redes">
      <div className="container">
        <ScrollReveal as="div" className="section-header">
          <p className="eyebrow">Vem com a gente</p>
          <h2 className="section-title redes-titulo">O mundo te espera.</h2>
          <p className="redes-sub">
            Acompanhe os bastidores, fale direto com o Chico e descubra as
            próximas expedições.
          </p>
        </ScrollReveal>

        <div className="redes-grid">
          {canais.map((c, i) => (
            <ScrollReveal
              as="a"
              key={c.nome}
              delay={i * 0.1}
              className="redes-card"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes-card-topo">
                <span className="redes-icone">{c.icone}</span>
                <span className="redes-seta" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{c.nome}</h3>
              <p>{c.descricao}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
