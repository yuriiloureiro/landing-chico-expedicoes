import ScrollReveal from "./ScrollReveal";
import "./ComoFunciona.css";

const etapas = [
  {
    numero: "01",
    titulo: "Você escolhe a expedição",
    texto:
      "Veja as próximas datas, destinos e vagas disponíveis. Encontrou a que combina com você? É só dar o primeiro passo.",
  },
  {
    numero: "02",
    titulo: "Você fala com o Chico",
    texto:
      "Preenche o formulário e o Chico entra em contato pra tirar dúvidas, alinhar expectativas e confirmar sua vaga no grupo.",
  },
  {
    numero: "03",
    titulo: "Você só embarca",
    texto:
      "Hospedagem, passeios, transporte e todos os detalhes já resolvidos. Sua única tarefa é aproveitar a experiência.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="como-funciona" id="como-funciona">
      <div className="container">
        <ScrollReveal as="div" className="section-header">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title">Sua expedição em 3 etapas</h2>
        </ScrollReveal>

        <div className="como-funciona-grid">
          {etapas.map((etapa, i) => (
            <ScrollReveal
              as="div"
              key={etapa.numero}
              delay={i * 0.12}
              className="etapa-card"
            >
              <span className="etapa-numero">{etapa.numero}</span>
              <span className="etapa-divisor" />
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
