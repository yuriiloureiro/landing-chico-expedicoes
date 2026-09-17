import ScrollReveal from "./ScrollReveal";
import "./Experiencia.css";

function IconeGrupo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M22 20c0-2.6-2-4.8-5-5.5" />
    </svg>
  );
}

function IconeGuia() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-4 3.1-7 7-7s7 3 7 7" />
    </svg>
  );
}

function IconePin() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function IconeMala() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

function IconeEscudo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconeEstrela() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6L12 3z" />
    </svg>
  );
}

const pilares = [
  {
    icone: IconeGrupo,
    titulo: "Um grupo na medida certa",
    texto:
      "O grupo é pensado para que todos possam aproveitar a viagem, criar conexões e receber o suporte necessário do início ao fim.",
  },
  {
    icone: IconeGuia,
    titulo: "Chico junto o tempo todo",
    texto:
      "Não é um guia contratado no destino. É quem conhece o destino por dentro, do seu lado em cada dia.",
  },
  {
    icone: IconePin,
    titulo: "Lugares que só quem vive lá conhece",
    texto:
      "Templos, mercados, vilarejos e cantos que não aparecem em roteiro de agência genérica.",
  },
  {
    icone: IconeMala,
    titulo: "Logística 100% resolvida",
    texto:
      "Deslocamento, hospedagem e imprevistos, você só precisa aparecer e viver a experiência.",
  },
  {
    icone: IconeEscudo,
    titulo: "Segurança em primeiro lugar",
    texto:
      "Experiência em expedições e conhecimento local aplicados pra você viajar tranquilo e sem susto.",
  },
  {
    icone: IconeEstrela,
    titulo: "Momentos que ficam pra sempre",
    texto:
      "Um céu cheio de lanternas, o pôr do sol nas dunas, uma cena que arrepia até quem achava que já tinha visto de tudo.",
  },
];

export default function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="container">
        <ScrollReveal as="div" className="section-header">
          <p className="eyebrow">O que você vive</p>
          <h2 className="section-title">
            Uma expedição pensada em cada detalhe pra você não precisar pensar
            em nada
          </h2>
        </ScrollReveal>
        <div className="experiencia-grid">
          {pilares.map((p, i) => {
            const Icone = p.icone;
            return (
              <ScrollReveal
                as="div"
                key={p.titulo}
                delay={(i % 3) * 0.1}
                className="experiencia-card"
              >
                <span className="experiencia-icone">
                  <Icone />
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
