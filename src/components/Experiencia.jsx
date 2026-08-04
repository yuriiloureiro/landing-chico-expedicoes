import "./Experiencia.css";

const pilares = [
  {
    titulo: "Um grupo na medida certa",
    texto:
      "O grupo é pensado para que todos possam aproveiar a viagem, criar conexões e receber o suporte necessário do inicio ao fim.",
  },
  {
    titulo: "Chico junto o tempo todo",
    texto:
      "Não é um guia contratado no destino. É quem estudou o país por anos, do seu lado em cada dia.",
  },
  {
    titulo: "Lugares que só quem vive lá conhece",
    texto:
      "Templos, mercados e cantos da Tailândia que não aparecem em roteiro de agência genérica.",
  },
  {
    titulo: "Logística 100% resolvida",
    texto:
      "Deslocamento, hospedagem e imprevistos, você só precisa aparecer e viver a experiência.",
  },
  {
    titulo: "Segurança em primeiro lugar",
    texto:
      "Experiente em expedições e conhecimento local aplicados pra você viajar tranquilo e sem susto.",
  },
  {
    titulo: "O momento mais esperado da viagem",
    texto:
      "O céu se enchendo de milhares de lanternas, uma cena que arrepia até quem achava que já tinha visto de tudo.",
  },
];

export default function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">O que você vive</p>
          <h2 className="section-title">
            Uma expedição pensada em cada detalhe pra você não precisar pensar
            em nada
          </h2>
        </div>
        <div className="experiencia-grid">
          {pilares.map((p) => (
            <div className="experiencia-card" key={p.titulo}>
              <span className="experiencia-marker" aria-hidden="true" />
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
