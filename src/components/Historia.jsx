import { useEffect, useState } from "react";
import capaVideo from "../assets/images/capa-video.webp";
import ScrollReveal from "./ScrollReveal";
import "./Historia.css";

const VIDEO_ID = "7-t5KniMERc";

export default function Historia() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="historia" id="sobre">
      <div className="container historia-grid">
        <ScrollReveal as="div" className="historia-video-wrap">
          <span className="historia-video-blob" aria-hidden="true" />
          <button
            className="historia-video-cover"
            onClick={() => setOpen(true)}
            aria-label="Assistir ao vídeo do Chico"
            style={{ backgroundImage: `url(${capaVideo})` }}
          >
            <span className="historia-play-icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <span className="historia-signature">Chico Castilho</span>
        </ScrollReveal>

        <ScrollReveal as="div" delay={0.15} className="historia-text">
          <p className="eyebrow historia-eyebrow">Quem te leva</p>
          <h2 className="section-title historia-title">
            Muito além de um roteiro. Expedições criadas por quem realmente
            conhece cada destino.
          </h2>
          <p>
            Você não vai viajar com alguém que pesquisou o destino na internet.
            Vai viajar com quem conhece o lugar na prática e transformou anos de
            experiência em expedições cuidadosamente planejadas.
          </p>
          <p>
            Com mais de 50 roteiros internacionais criados, milhares de
            viajantes impactados e uma comunidade com mais de 25 mil pessoas
            acompanhando cada nova aventura, o Chico leva para a expedição muito
            mais do que organização: leva experiência.
          </p>
          <p>E é isso que faz a diferença.</p>
          <p>
            Do primeiro ao último dia, ele acompanha o grupo em cada etapa da
            viagem, cuida da logística, resolve imprevistos e abre portas para
            experiências que dificilmente quem viaja sozinho conseguiria viver.
          </p>
          <p>
            Enquanto você aproveita a viagem, existe alguém experiente cuidando
            dos detalhes para que sua única preocupação seja viver cada momento.
          </p>
          <p className="historia-assinatura-texto">
            Te espero na próxima expedição, Chico Castilho.
          </p>
        </ScrollReveal>
      </div>

      {open && (
        <div className="historia-modal" onClick={() => setOpen(false)}>
          <button
            className="historia-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar vídeo"
          >
            ×
          </button>
          <div
            className="historia-modal-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Apresentação do Chico Castilho"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
