import { useEffect, useState } from "react";
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
      <div className="section-header">
        <p className="eyebrow">Registros da expedição</p>
        <h2 className="section-title">Momentos que só quem foi entende</h2>
      </div>

      <div className="galeria-track">
        <div className="galeria-loop">
          {loop.map((src, i) => (
            <button
              key={`${src}-${i}`}
              className="galeria-item"
              onClick={() => setIndex(i % fotos.length)}
              aria-label={`Ver foto ${(i % fotos.length) + 1} em tamanho grande`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>

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
