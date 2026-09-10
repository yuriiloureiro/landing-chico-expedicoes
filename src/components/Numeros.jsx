import "./Numeros.css";

const numeros = [
  { valor: "25 mil+", label: "pessoas acompanhando cada expedição" },
  { valor: "50+", label: "roteiros internacionais criados" },
];

export default function Numeros() {
  return (
    <section className="numeros">
      <div className="container numeros-grid">
        {numeros.map((n) => (
          <div className="numero-item" key={n.label}>
            <span className="numero-valor">{n.valor}</span>
            <span className="numero-label">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
