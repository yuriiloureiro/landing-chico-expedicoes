import { useEffect, useState } from "react";
import "./Historia.css";

const VIDEO_ID = "8wPcimhfuOU";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

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
        <div className="historia-video-wrap">
          <button
            className="historia-video-cover"
            onClick={() => setOpen(true)}
            aria-label="Assistir ao vídeo do Chico"
            style={{ backgroundImage: `url(${THUMBNAIL})` }}
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
        </div>

        <div className="historia-text">
          <p className="eyebrow historia-eyebrow">Quem te leva</p>
          <h2 className="section-title historia-title">
            Não é um roteiro pronto. É alguém que já viveu cada parte dele.
          </h2>
          <p>
            Chico largou a rotina de escritório pra viver como nômade digital e
            a Tailândia virou o país que ele mais retornou, mais estudou e mais
            amou. De lá pra cá já são mais de 100 roteiros criados, um Instagram
            com mais de 25 mil pessoas acompanhando cada expedição, e uma
            certeza: viagem boa não é sobre o destino, é sobre ter alguém de
            confiança guiando o caminho.
          </p>
          <p>
            Nas expedições, ele não fica só de longe organizando — ele está
            junto, todos os dias, resolvendo o que aparece e criando os momentos
            que não têm como planejar.
          </p>
        </div>
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
