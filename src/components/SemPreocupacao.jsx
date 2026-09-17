import ScrollReveal from "./ScrollReveal";
import "./SemPreocupacao.css";

function IconeMapa() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 20l-5.5-2V4l5.5 2 6-2 5.5 2v14l-5.5-2-6 2z" />
      <path d="M9 4v16M15 6v16" />
    </svg>
  );
}

function IconeCasa() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

function IconeGrupo() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
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

function IconeChat() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16v11H8l-4 4V5z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

const itens = [
  {
    icone: IconeMapa,
    titulo: "Logística resolvida",
    texto:
      "Transporte, transfers e cada deslocamento já organizados do início ao fim.",
    variante: "claro",
  },
  {
    icone: IconeCasa,
    titulo: "Hospedagens selecionadas",
    texto:
      "Lugares escolhidos a dedo pelo Chico, sem surpresa na hora de chegar.",
    variante: "escuro",
  },
  {
    icone: IconeGrupo,
    titulo: "Grupo pequeno",
    texto:
      "Turmas reduzidas, pra experiência ficar próxima e o Chico acompanhar todo mundo de perto.",
    variante: "claro",
  },
  {
    icone: IconeChat,
    titulo: "Suporte direto com o Chico",
    texto:
      "Antes, durante e depois da viagem, sempre com alguém pra tirar dúvida.",
    variante: "gold",
  },
];

export default function SemPreocupacao() {
  return (
    <section className="sem-preocupacao">
      <div className="container">
        <ScrollReveal as="div" className="section-header">
          <span className="eyebrow">Entrega completa</span>
          <h2 className="section-title">
            O que você não precisa se preocupar.
          </h2>
        </ScrollReveal>

        <div className="sem-preocupacao-grid">
          {itens.map((item, i) => {
            const Icone = item.icone;
            return (
              <ScrollReveal
                as="div"
                key={item.titulo}
                delay={i * 0.1}
                className={`sp-card sp-card--${item.variante}`}
              >
                <span className="sp-icone">
                  <Icone />
                </span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
