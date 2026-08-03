import "./Experiencia.css";

const pilares = [
  {
    titulo: "Grupo pequeno, de verdade",
    texto:
      "Turmas reduzidas a experiência é conjunta, não uma fila de turistas seguindo uma bandeirinha.",
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
      "Deslocamento, hospedagem e imprevistos — você só precisa aparecer e viver a experiência.",
  },
  {
    titulo: "Segurança em primeiro lugar",
    texto:
      "Anos de expedições e conhecimento local aplicados pra você viajar tranquilo, sem susto.",
  },
  {
    titulo: "Um momento que não se repete",
    texto:
      "O céu se enchendo de milhares de lanternas — poucas vezes na vida algo assim acontece.",
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
