import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import "./Galeria.css";

// Pega automaticamente todas as imagens dentro de src/assets/images/galeria/
const modules = import.meta.glob(
  "../assets/images/galeria/*.{webp,jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  },
);

const fotos = Object.keys(modules)
  .sort()
  .map((path) => modules[path]);

function IconeAmpliar() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M21 21l-4.5-4.5" />
      <path d="M10.5 8v5M8 10.5h5" />
    </svg>
  );
}

export default function Galeria() {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % fotos.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + fotos.length) % fotos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (fotos.length === 0) return null;

  const loop = [...fotos, ...fotos];

  return (
    <section className="galeria" id="galeria">
      <ScrollReveal as="div" className="section-header">
        <p className="eyebrow">Registros da expedição</p>
        <h2 className="section-title">Momentos que só quem foi entende</h2>
      </ScrollReveal>

      <ScrollReveal as="div" className="galeria-track" y={16}>
        <div className="galeria-loop">
          {loop.map((src, i) => (
            <button
              key={`${src}-${i}`}
              className="galeria-item"
              onClick={() => setIndex(i % fotos.length)}
              aria-label={`Ver foto ${(i % fotos.length) + 1} em tamanho grande`}
              style={{ backgroundImage: `url(${src})` }}
            >
              <span className="galeria-item-overlay">
                <IconeAmpliar />
              </span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {isOpen && (
        <div className="galeria-modal" onClick={() => setIndex(null)}>
          <button
            className="galeria-modal-close"
            onClick={() => setIndex(null)}
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            className="galeria-modal-nav galeria-modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + fotos.length) % fotos.length);
            }}
            aria-label="Foto anterior"
          >
            ‹
          </button>

          <img
            src={fotos[index]}
            alt={`Foto ${index + 1} da expedição`}
            className="galeria-modal-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="galeria-modal-nav galeria-modal-next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % fotos.length);
            }}
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
